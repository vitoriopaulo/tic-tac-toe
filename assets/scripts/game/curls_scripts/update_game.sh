curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/${ID}" \
--header "Authorization: Token token=$TOKEN" \
--header "Content-type: application/json" \
--data '{
  "game": {
    "cell" {
    "index": "'"${NEWINDEX}"'",
    "value": "'"${NEWVALUE}"'"
  }
  "over": "'"${false}"'"
}'

echo
