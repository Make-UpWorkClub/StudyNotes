{
  description = "Development shell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = { nixpkgs, flake-parts, ... } @ inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];
      perSystem = { pkgs, ... }: {
        devShells.default = pkgs.mkShell {
          packages =
            with pkgs;
            with python3Packages;
            [
              nil
              nodejs
              pnpm
              python3
            ];

          shellHook = ''
            export PNPM_HOME="/home/weathercold/.local/share/pnpm"
            case ":$PATH:" in
              *":$PNPM_HOME:"*) ;;
              *) export PATH="$PNPM_HOME:$PATH" ;;
            esac
          '';
        };
      };
    };
}
