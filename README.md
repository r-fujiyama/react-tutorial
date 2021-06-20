# 環境構築

## WSL2

[ガイド](https://docs.microsoft.com/ja-jp/windows/wsl/install-win10)に従い、WSL2 をインストールする。  
Linux ディストリビューションは**Ubuntu 20.04 LTS**を使用する。

## Ubuntu 20.04

1. `wsl -d Ubuntu-20.04`コマンドを実行し Ubuntu の shell を起動する。
1. ユーザの登録が求められるので登録を行う。
1. パッケージを最新化するため、以下の手順を実施する。
   1. `sudo apt update`
   1. `sudo apt dist-upgrade`
   1. `sudo apt autoremove`
1. Git のブランチ名をプロンプトに表示させるため、以下の手順を実施する。
   1. `curl -o ~/.git-prompt.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh`
   1. `echo 'source ~/.git-prompt.sh' >> ~/.bashrc`
   1. **~/.bashrc**の`if [ "$color_prompt" = yes ]; then`の下に存在する PS1 を以下のように書き換える。  
      `PS1='${debian_chroot:+($debian_chroot)}\[\e[1;32m\]\u@\h\[\e[0m\]:\[\e[1;33m\]\w\[\e[1;36m\]$(__git_ps1)\[\e[0m\]$ '`
1. エクスプローラーから **\\\\wsl$\\Ubuntu-20.04**にアクセスし、プロジェクトを任意の場所に移動させる。  
   ※必ず Ubuntu の中にプロジェクトを移動させること。
1. 以下の設定は任意で行う。
   - `wsl -s Ubuntu-20.04`  
     既定のディストリビューションを設定。
   - `ubuntu2004 config --default-user root`  
     デフォルトユーザを root に変更

## Docker

[ガイド](https://docs.docker.com/docker-for-windows/wsl/)に従い Docker をインストールし、WSL2 バックエンドで動作するよう設定する。

## VS Code

1. [VS Code](https://code.visualstudio.com/download)をインストールする。
1. VS Code に以下の拡張機能をインストールする。
   - [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
   - [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
   - [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
1. Ubuntu のシェル上で以下のコマンドを実行する。
   - `code {project directory path}`
1. Ubuntu 上で起動した VS Code でコマンドパレットより以下を実行する。
   - `Remote-Containers: Reopen in Container`

# その他

### `yarn start`

アプリを開発モードで実行します。
[http://localhost](http://localhost)を開くと、ブラウザで表示されます。  
編集した場合は、ページが再読み込みされます。  
また、コンソールには lint エラーが表示されます。

### `yarn test`

インタラクティブなウォッチモードでテストランナーを起動します。  
詳しくは、[running tests](https://facebook.github.io/create-react-app/docs/running-tests)の項をご覧ください。

### `yarn build`

本番用のアプリを build フォルダにビルドします。  
本番モードの React を正しくバンドルし、最高のパフォーマンスが得られるようにビルドを最適化します。  
ビルドは minify され、ファイル名にはハッシュが含まれます。  
アプリをデプロイする準備ができました。  
詳しくは[deployment](https://facebook.github.io/create-react-app/docs/deployment)の項をご覧ください。
