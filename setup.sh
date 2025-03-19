#!/bin/bash

# Check which package manager is available
if command -v npm > /dev/null 2>&1; then
  echo "Using npm..."
  PACKAGE_MANAGER="npm"
  INSTALL_CMD="npm install"
  DEV_CMD="npm run dev"
elif command -v yarn > /dev/null 2>&1; then
  echo "Using yarn..."
  PACKAGE_MANAGER="yarn"
  INSTALL_CMD="yarn install"
  DEV_CMD="yarn dev"
elif command -v pnpm > /dev/null 2>&1; then
  echo "Using pnpm..."
  PACKAGE_MANAGER="pnpm"
  INSTALL_CMD="pnpm install"
  DEV_CMD="pnpm dev"
elif command -v bun > /dev/null 2>&1; then
  echo "Using bun..."
  PACKAGE_MANAGER="bun"
  INSTALL_CMD="bun install"
  DEV_CMD="bun dev"
else
  echo "No package manager found. Please install npm, yarn, pnpm, or bun."
  exit 1
fi

# Install dependencies
echo "Installing dependencies..."
$INSTALL_CMD

# Start the development server
echo "Starting the development server..."
$DEV_CMD
