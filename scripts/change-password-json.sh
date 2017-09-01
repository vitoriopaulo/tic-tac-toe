#!/bin/bash

# ID=127 OLD_PASSWORD="hamburgers" NEW_PASSWORD="chickentenders" TOKEN="BAhJIiU5NTcwMTQzYmUyN2RmZWY2MTkzMGJiMTVkZTg3NjcwYwY6BkVG--4d5043cc3d352e97b7aff676c13d6218ddce93bf" sh scripts/change-password-json.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "passwords": {
    "old": "'"${OLD_PASSWORD}"'",
    "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
