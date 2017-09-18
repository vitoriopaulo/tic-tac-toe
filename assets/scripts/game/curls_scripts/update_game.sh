#TOKEN: "BAhJIiViNTU4MWNhMTUyZDkyMDliYWJjYjk0NmFhNzQxN2YzMwY6BkVG--a978c164030bc68c223ef9c1849babba57fa97af"
# ID: 822
curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/${ID}" \
--header "Authorization: Token token=$TOKEN" \
--header "Content-type: application/json" \
--data '{"game":
          "id": "'"${ID}"'"
          "cells":
    {"index": "'"${NEWINDEX}"'",
    "value": "'"${NEWVALUE}"'"}
}'

echo
