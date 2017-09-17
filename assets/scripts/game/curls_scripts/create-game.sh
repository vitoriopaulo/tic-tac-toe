# TOKEN="BAhJIiViYWI3MjAzNGMwNWM1YzdjZWUzMDBhOTEzMTQxYjFmZAY6BkVG--a9e674bb724fffbf99100bca0f98811fdee1e357"
curl --include --request POST "http://tic-tac-toe.wdibos.com/games" \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \

echo
