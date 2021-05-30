# 環境構築

## WSL2
[ガイド](https://docs.microsoft.com/ja-jp/windows/wsl/install-win10)に従い、WSL2をインストールする。  
Linux distributionは**Ubuntu 20.04 LTS**を使用する。

## Ubuntu 20.04
1. ```wsl -d Ubuntu-20.04```コマンドを実行しUbuntuのshellを起動する。  
1. ユーザの登録が求められるので登録を行う。
1. パッケージを最新化するため、以下の手順を実施する。
    1. ```sudo apt update```
    1. ```sudo apt dist-upgrade```
    1. ```sudo apt autoremove```
1. Gitのブランチ名をプロンプトに表示させるため、以下の手順を実施する。
    1. ```curl -o ~/.git-prompt.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh```
    1. ```echo 'source ~/.git-prompt.sh' >> ~/.bashrc```
    1. **~/.bashrc**の```if [ "$color_prompt" = yes ]; then```の下の行に存在するPS1を以下のように書き換える。  
    ```PS1='${debian_chroot:+($debian_chroot)}\[\e[1;32m\]\u@\h\[\e[0m\]:\[\e[1;33m\]\w\[\e[1;36m\]$(__git_ps1)\[\e[0m\]$ '```
1. Explorerから **\\\\wsl$\\Ubuntu-20.04**にアクセスし、 任意の場所にProjectを移動させる。  
※必ずUbuntuの中にProjectを移動させること。


## Docker
[ガイド](https://docs.docker.com/docker-for-windows/wsl/)に従いDockerをインストールし、WSL2バックエンドで動作するよう設定する。

## VS Code
1. [VS Code](https://code.visualstudio.com/download)をインストールする。  
1. VS Codeに以下の拡張機能をインストールする。
    - [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
    - [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
    - [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
1. Ubuntuのシェル上で以下のコマンドを実行する。
    - ```code {project directory path}```
1. Ubuntu上で起動したVS Codeでコマンドパレットより以下を実行

# その他

### `yarn start`
アプリを開発モードで実行します。
[http://localhost](http://localhost)を開くと、ブラウザで表示されます。  
編集した場合は、ページが再読み込みされます。  
また、コンソールにはlintエラーが表示されます。

### `yarn test`
インタラクティブなウォッチモードでテストランナーを起動します。  
詳しくは、[running tests](https://facebook.github.io/create-react-app/docs/running-tests)の項をご覧ください。

### `yarn build`
本番用のアプリを `build` フォルダにビルドします。  
本番モードのReactを正しくバンドルし、最高のパフォーマンスが得られるようにビルドを最適化します。  
ビルドはminifyされ、ファイル名にはハッシュが含まれます。  
アプリをデプロイする準備ができました。  
詳しくは[deployment](https://facebook.github.io/create-react-app/docs/deployment)の項をご覧ください。
