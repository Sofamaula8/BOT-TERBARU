{ pkgs }: {
    deps = [
        pkgs.nodejs
        pkgs.nodePackages.typescript
        pkgs.ffmpeg
        pkgs.libwebp
        pkgs.yarn
        pkgs.imagemagick
        pkgs.git
    ];
}