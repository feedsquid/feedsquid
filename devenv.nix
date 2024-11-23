{ pkgs, ... }:

{
  # https://devenv.sh/packages/
  packages = with pkgs; [
    nixfmt-rfc-style
  ];

  # https://devenv.sh/languages/
  languages = {
    # https://github.com/cachix/devenv/blob/main/src/modules/languages/nix.nix
    # https://devenv.sh/supported-languages/nix/
    nix = {
      enable = true;
      lsp.package = pkgs.nixd;
    };
  };
}
