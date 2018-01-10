# await-env

> Wait for an environment variable to be present in the systemd environment, then execute a command

# Usage

`await-env [variable-name] [command...]` will:

1. Loop, running `systemd --user show-environment` until a variable `variable-name` is found.
2. Then, after the variable is found, it will exec `command`, with any arguments that follow

Historically I've had issues getting systemd to start a graphical target at the right time. There is a `graphical.target` that I expect is all I need before launching a program, but my success actually gating service launches via this hasn't materialized and I don't know why. By doing an `Exec=/usr/bin/await-env DISPLAY xlogo`, I expect xlogo service will only start in fact after DISPLAY becomes available, which ought accomplish what I the user expected After=graphical.target to achieve.
