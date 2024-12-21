{ pkgs, ... }:

{
  # https://devenv.sh/packages/
  packages = with pkgs; [
    nixfmt-rfc-style
  ];

  # https://devenv.sh/languages/
  languages = {
    # https://devenv.sh/supported-languages/nix/
    nix = {
      enable = true;
      lsp.package = pkgs.nixd;
    };

    # https://devenv.sh/supported-languages/deno/
    deno = {
      enable = true;
    };
  };
}
