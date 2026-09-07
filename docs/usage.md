# How to Use

## Prerequisites

Make sure you have the following prerequisites installed before proceeding:

- NodeJS 24.19
- pnpm 12.3.4
- Visual Studio Build Tools (workload "Desktop development with C++")

> [!WARNING]
> `better-sqlite3` is a native C++ module and needs to be compiled during installation, as well as rebuilt for Electron's ABI (different from the system's NodeJS ABI). This is handled automatically by the `postinstall` script.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/igorchaves22/cine-box.git
cd cine-box
pnpm install
```

### Environment Variables

For development mode, create a `.env` file in the project root with the following variable:

```dotenv
DATABASE_URL=./src/main/database/cine-box.db
```

## Scripts

Available commands for running the project:

| Command            | What it does                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------- |
| `pnpm build`       | Compiles the project without generating an installer                                        |
| `pnpm dev`         | Compiles the project and runs the application in development mode                           |
| `pnpm package`     | Compiles the project and generates the distribution files in `release/`                     |
| `pnpm db:generate` | Generates migration files                                                                   |
| `pnpm db:migrate`  | Applies migrations to the database                                                          |
| `pnpm lint:check`  | Checks whether the code follows the linting and formatting rules without modifying anything |
| `pnpm lint:fix`    | Automatically fixes linting and formatting issues whenever possible                         |
