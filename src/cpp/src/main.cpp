// #include <string.h>
// #include <iostream>

// #include <emscripten.h>

// #ifdef __EMSCRIPTEN__
//   #define __SSE__ 1
//   #define __SSE2__ 1
//   #define __SSE3__ 1
//   #include <SSE/immintrin.h>
// // #include <wasm_simd128.h>
// #else
//   #include <immintrin.h>
// #endif

// // #include <webgpu/webgpu.h>
// // #include "data/data.h"
// // #include "data/vec4/vec4-128.cpp"
// // #include "main.h"

// // alignas(16) float c[4] = { 6.0, 6.0, 6.0, 6.0 };
// // float* d;

// // extern void set128_ (void*, const float, const float, const float, const float);

// // extern void set128__ (__m128*, const float, const float, const float, const float);

// void EMSCRIPTEN_KEEPALIVE set32 (void* data, const float x, const float y, const float z, const float w) {

//   float* _data = (float*) data;

//   _data[0] = x;
//   _data[1] = y;
//   _data[2] = z;
//   _data[3] = w;
// };

// void EMSCRIPTEN_KEEPALIVE set128 (void* data, const float x, const float y, const float z, const float w) {

//   _mm_store_ps((float*) data, _mm_setr_ps(x, y, z, w));
// };

// float EMSCRIPTEN_KEEPALIVE test_func (void) {

//   // float* d;

//   // XGK::DATA::VEC4::simd32();

//   // alignas(16) float c[4] = { 6.0, 6.0, 6.0, 6.0 };
//   // alignas(16) v128_t c;
//   // alignas(16) __m128 dd;
//   // float* d = (float*) &dd;

//   alignas(16) float d[4] = { 0.0, 0.0, 0.0, 0.0 };

//   // XGK::DATA::VEC4::set32(c, 0.0, 98.0, 3.0, 4.0);
//   set128(d, 1.0, 32.0, 3.0, 4.0);
//   // set128(d, 1.0, 32.0, 3.0, 4.0);
//   // set128(d, 1.0, 98.0, 3.0, 4.0);
//   // set128__(&dd, 1.0, 98.0, 3.0, 4.0);
//   // _mm_store_ps((float*) &d, _mm_set_ps(1.0, 98.0, 3.0, 4.0));

//   // memcpy(c, c, 16);
//   // memcpy(&d, &d, 16);

//   // std::cout << sizeof(float) << std::endl;


//   return d[1];
// };



#include <stdlib.h>
#include <cstdint>
#include <iostream>
#include <string.h>
#include <math.h>
#include <vector>
#include <map>

#include <emscripten.h>
// #include <wasm_simd128.h>
#include <GLES3/gl3.h>
#include <GLFW/glfw3.h>

#include "data/data.h"
#include "object/object.h"
#include "util/util.h"



void _glCreateShader (GLuint* shader, const GLchar** shader_code, const GLenum type) {

  GLint shader_param = 0;
  *shader = glCreateShader(type);
  glShaderSource(*shader, 1, shader_code, nullptr);
  glCompileShader(*shader);

  glGetShaderiv(*shader, GL_COMPILE_STATUS, &shader_param);

  if (!shader_param) {

    GLsizei length;
    GLchar log[1000];

    glGetShaderInfoLog(*shader, 1000, &length, log);

    for (GLsizei i = 0; i < length; i++) {

      std::cout << log[i];
    }
  }
};

// void mapUniforms (GLuint program, std::map<std::string, GLint>* container, std::string names) {

//   glUseProgram(program);

//   size_t pos = 0;
//   std::string name;
//   std::string delimiter = "|";

//   while ((pos = names.find("|")) != std::string::npos) {

//     name = names.substr(0, pos);
//     uint64_t name_length = name.length();
//     char name_char[name_length];

//     for (uint64_t i = 0; i < sizeof(name_char); i++) {

//       name_char[i] = name[i];
//     }

//     names.erase(0, pos + delimiter.length());

//     container->insert(std::pair<std::string, GLint>(name_char, glGetUniformLocation(program, name_char)));
//   }

//   name = names;
//   uint64_t name_length = name.length();
//   char name_char[name_length];

//   for (uint64_t i = 0; i < sizeof(name_char); i++) {

//     name_char[i] = name[i];
//   }

//   container->insert(std::pair<std::string, GLint>(name_char, glGetUniformLocation(program, name_char)));

//   glUseProgram(0);
// };



static GLFWwindow* window = nullptr;



using namespace XGK::DATA::VEC4;
using namespace XGK::DATA::MAT4;
using namespace XGK::OBJECT;



struct Camera {

  XGK::Object object;

  float view_mat[16];

  float proj_mat[16];



  void init () {

    XGK::OBJECT::init(&object);

    XGK::DATA::VEC4::set(object.trans, 0.0, 0.0, 150.0, 0.0);
    XGK::DATA::VEC4::set(object.origin, 0.0, 0.0, -150.0, 0.0);

    XGK::OBJECT::update2(&object);

    XGK::DATA::MAT4::copy(view_mat, &object.mat);
    XGK::DATA::MAT4::invns(view_mat);

    // makeProjPersp(proj_mat, 45.0, 1.0, 1.0, 2000.0, 1.0);
  };
};

Camera camera;



struct ObjectGL {

  GLuint vertex_shader = 0;

  GLuint fragment_shader = 0;

  GLuint program = 0;

  std::map<std::string, GLint> single_uniforms;



  void mapSingleUniforms (std::string names) {

    glUseProgram(program);

    size_t pos = 0;
    std::string name;
    std::string delimiter = "|";

    while ((pos = names.find("|")) != std::string::npos) {

      name = names.substr(0, pos);
      uint64_t name_length = name.length();
      char name_char[name_length];

      for (uint64_t i = 0; i < sizeof(name_char); i++) {

        name_char[i] = name[i];
      }

      names.erase(0, pos + delimiter.length());

      single_uniforms.insert(std::pair<std::string, GLint>(name_char, glGetUniformLocation(program, name_char)));
    }

    name = names;
    uint64_t name_length = name.length();
    char name_char[name_length];

    for (uint64_t i = 0; i < sizeof(name_char); i++) {

      name_char[i] = name[i];
    }

    single_uniforms.insert(std::pair<std::string, GLint>(name_char, glGetUniformLocation(program, name_char)));

    glUseProgram(0);
  };
};



struct Points : ObjectGL {

  std::vector<float> spline_control_points;
  std::vector<float> spline_points;

  uint64_t spline_point_count = 0;

  GLuint vertex_buffer = 0;

  const GLchar* vertex_shader_code =
    R"(#version 300 es

      precision highp float;

      layout (location = 0) in vec4 vertex_data;

      uniform mat4 proj_mat;
      uniform mat4 view_mat;

      out vec4 position;

      void main (void) {

        gl_PointSize = 1.0;

        gl_Position = proj_mat * view_mat * vec4(vertex_data.xyz, 1.0);
      }
    )";

  const GLchar* fragment_shader_code =
    R"(#version 300 es

      precision highp float;

      layout (location = 0) out vec4 outputColor;

      void main (void) {

        outputColor = vec4(1.0, 1.0, 1.0, 1.0);
      }
    )";



  void init (void) {

    for (uint64_t i = 0; i < 1024; i++) {

      float point[4] = { 0.0, 0.0, 0.0, 0.0 };

      XGK::DATA::VEC4::set(
        point,
        ((float) rand()) / ((float) RAND_MAX) - 0.5,
        ((float) rand()) / ((float) RAND_MAX) - 0.5,
        ((float) rand()) / ((float) RAND_MAX) - 0.5,
        0.0
      );

      XGK::DATA::VEC4::norm(point);
      XGK::DATA::VEC4::muls(point, 100.0);

      spline_control_points.push_back(point[0]);
      spline_control_points.push_back(point[1]);
      spline_control_points.push_back(point[2]);
      spline_control_points.push_back(point[3]);
    }

    XGK::UTIL::makeCatmullRomSpline3PointsClosed3D(&spline_points, &spline_control_points, 32, 1);

    spline_point_count = spline_points.size() / 4;

    // std::cout << spline_point_count << std::endl;

    glGenBuffers(1, &vertex_buffer);
    glBindBuffer(GL_ARRAY_BUFFER, vertex_buffer);
    glBufferData(GL_ARRAY_BUFFER, spline_points.size() * sizeof(float), spline_points.data(), GL_STATIC_DRAW);

    _glCreateShader(&vertex_shader, &vertex_shader_code, GL_VERTEX_SHADER);
    _glCreateShader(&fragment_shader, &fragment_shader_code, GL_FRAGMENT_SHADER);

    program = glCreateProgram();
    glAttachShader(program, vertex_shader);
    glAttachShader(program, fragment_shader);
    glLinkProgram(program);

    mapSingleUniforms("proj_mat|view_mat");

    glEnableVertexAttribArray(0);
  };

  void draw (void) {
    glUseProgram(program);
    glUniformMatrix4fv(single_uniforms["proj_mat"], 1, false, camera.proj_mat);
    glUniformMatrix4fv(single_uniforms["view_mat"], 1, false, camera.view_mat);
    glVertexAttribPointer(0, 4, GL_FLOAT, 0, 0, 0);
    glDrawArrays(GL_POINTS, 0, spline_point_count);
  };
};

Points points;



struct Triangle {

  float triangle_position_data[9] = {
    -1.0, -1.0, 0.0,
    -1.0,  1.0, 0.0,
    1.0,  1.0, 0.0
  };

  uint16_t triangle_index_data[3] = { 0, 1, 2 };



  GLuint vertex_buffer = 0;
  GLuint index_buffer = 0;

  const GLchar* vertex_shader_code =
    R"(#version 300 es
      // #version 440

      precision highp float;

      layout (location = 0) in vec3 vertex_data;

      // out gl_PerVertex {
      //   vec4 gl_Position;
      // };

      out vec4 position;

      void main (void) {

        gl_PointSize = 1.0;
        gl_Position = vec4(vertex_data, 1.0);
      }
    )";

  GLuint vertex_shader = 0;

  const GLchar* fragment_shader_code =
    R"(#version 300 es
      // #version 440

      #extension GL_ARB_separate_shader_objects : enable
      precision highp float;

      layout (location = 0) out vec4 outputColor;

      void main (void) {

        outputColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
    )";

  GLuint fragment_shader = 0;

  GLuint program = 0;



  void init (void) {

    glGenBuffers(1, &vertex_buffer);
    glBindBuffer(GL_ARRAY_BUFFER, vertex_buffer);
    glBufferData(GL_ARRAY_BUFFER, 9 * 4, triangle_position_data, GL_STATIC_DRAW);

    glGenBuffers(1, &index_buffer);
    glBindBuffer(GL_ARRAY_BUFFER, index_buffer);
    glBufferData(GL_ARRAY_BUFFER, 3, triangle_index_data, GL_STATIC_DRAW);

    GLint shader_param = 0;

    vertex_shader = glCreateShader(GL_VERTEX_SHADER);
    glShaderSource(vertex_shader, 1, &vertex_shader_code, nullptr);
    glCompileShader(vertex_shader);

    glGetShaderiv(vertex_shader, GL_COMPILE_STATUS, &shader_param);

    if (!shader_param) {

      GLsizei length;
      GLchar log[1000];

      glGetShaderInfoLog(vertex_shader, 1000, &length, log);

      for (GLsizei i = 0; i < length; i++) {

        std::cout << log[i];
      }
    }

    fragment_shader = glCreateShader(GL_FRAGMENT_SHADER);
    glShaderSource(fragment_shader, 1, &fragment_shader_code, nullptr);
    glCompileShader(fragment_shader);

    glGetShaderiv(fragment_shader, GL_COMPILE_STATUS, &shader_param);

    if (!shader_param) {

      GLsizei length;
      GLchar log[1000];

      glGetShaderInfoLog(fragment_shader, 1000, &length, log);

      for (GLsizei i = 0; i < length; i++) {

        std::cout << log[i];
      }
    }

    program = glCreateProgram();
    glAttachShader(program, vertex_shader);
    glAttachShader(program, fragment_shader);
    glLinkProgram(program);

    glEnableVertexAttribArray(0);
  };

  void draw (void) {
    glUseProgram(program);
    glVertexAttribPointer(0, 3, GL_FLOAT, 0, 0, 0);
    glDrawElements(GL_TRIANGLES, 3, GL_UNSIGNED_INT, 0);
  };
};

Triangle triangle;



static void error_callback(int error, const char* description) {

  fprintf(stderr, "Error: %s\n", description);
};



// util
extern "C" {

  uint8_t initGL () {

    if (!glfwInit()) {

      return 1;
    }

    window = glfwCreateWindow(1, 1, "", nullptr, nullptr);

    if (!window) {

      glfwTerminate();

      return 1;
    }

    glfwMakeContextCurrent(window);

    glfwSetErrorCallback(error_callback);

    #ifndef __EMSCRIPTEN__

      glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 2);
      glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 0);

      gladLoadGL();
      glfwSwapInterval(1);
    #endif

    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);

    XGK::DATA::simd32();

    return 0;
  };

  void setWindowSize (const uint32_t width, const uint32_t height) {

    // std::cout << width << "  " << height << std::endl;

    makeProjPersp32(camera.proj_mat, 45.0, ((float) width) / ((float) height), 1.0, 2000.0, 1.0);

    glfwSetWindowSize(window, width, height);
    glViewport(0, 0, width, height);
  };

  void destroyGL () {

    glfwDestroyWindow(window);
    glfwTerminate();
  };
}



static void iter (void) {

  glClear(GL_COLOR_BUFFER_BIT);
  XGK::OBJECT::postRotX(&camera.object, 0.01);
  XGK::OBJECT::update2(&camera.object);
  XGK::DATA::MAT4::copy(camera.view_mat, camera.object.mat);
  XGK::DATA::MAT4::invns(camera.view_mat);
  points.draw();
};



int main (void) {

  camera.init();
  points.init();



  emscripten_set_main_loop(iter, 60, 0);



  return 0;
};



#undef ITERATION
