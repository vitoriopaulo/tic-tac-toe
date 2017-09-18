#TOKEN: "BAhJIiViNTU4MWNhMTUyZDkyMDliYWJjYjk0NmFhNzQxN2YzMwY6BkVG--a978c164030bc68c223ef9c1849babba57fa97af"
# ID: 822
curl --include --request GET "http://tic-tac-toe.wdibos.com/games" \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \

echo
