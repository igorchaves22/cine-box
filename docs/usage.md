# How to Use

## Prerequisites

Make sure you have the following prerequisites installed before proceeding:

- NodeJS 24.19
- pnpm 12.3.4

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/igorchaves22/cine-box.git
cd cine-box
pnpm install
```

## Scripts

Available commands for running the project:

| Command           | What it does                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `pnpm build`      | Compiles the project without generating an installer                                        |
| `pnpm dev`        | Compiles the project and runs the application in development mode                           |
| `pnpm package`    | Compiles the project and generates the distribution files in `release/`                     |
| `pnpm lint:check` | Checks whether the code follows the linting and formatting rules without modifying anything |
| `pnpm lint:fix`   | Automatically fixes linting and formatting issues whenever possible                         |
