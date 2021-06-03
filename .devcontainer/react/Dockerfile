FROM node:16.2.0-alpine3.11
WORKDIR /home
RUN apk update && \
    # Tools
    apk add --no-cache bash && \
    apk add --no-cache bash-completion && \
    apk add --no-cache curl && \
    apk add --no-cache vim && \
    apk add --no-cache git && \
    # Bash
    sed -e 's;/bin/ash$;/bin/bash;g' -i /etc/passwd && \
    echo "PS1='\[\e[1;32m\]\u@\h\[\e[0m\]:\[\e[1;33m\]\w\[\e[1;36m\]"'$(__git_ps1)\[\e[0m\]$ '"'" >> ~/.bashrc && \
    echo 'if [ -n "$BASH_VERSION" ]; then' >> ~/.profile && \
    echo '  if [ -f "$HOME/.bashrc" ]; then' >> ~/.profile && \
    echo '    . "$HOME/.bashrc"' >> ~/.profile && \
    echo '  fi' >> ~/.profile && \
    echo 'fi' >> ~/.profile && \
    curl -o ~/.git-completion.bash https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash && \
    echo 'source ~/.git-completion.bash' >> ~/.bashrc && \
    curl -o ~/.git-prompt.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh && \
    echo 'source ~/.git-prompt.sh' >> ~/.bashrc && \
    # Git
    git config --global core.editor vim && \
    git config --global core.commentChar ';'
