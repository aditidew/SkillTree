#!/bin/bash

echo "Compiling..."
g++ -fprofile-arcs -ftest-coverage -std=c++17 \
skilltree_src/*.cpp tests/*.cpp \
-lgtest -lgtest_main -pthread -o skilltree_tests 2> logs/build_errors.log

if [ $? -ne 0 ]; then
  echo "Build failed. Check logs/build_errors.log"
  exit 1
fi

echo "Running tests..."
./skilltree_tests

echo "Generating coverage report..."
gcov skilltree_src/*.cpp > logs/coverage.log

echo "Done. Check logs/coverage.log for coverage data."
