curl --include --request POST "https://aqueous-atoll-85096.herokuapp.com/" \
  --header "Content-type: application/json" \
  --data '{
  "game": {
    "id": "",
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": "",
      "email": ""
    },
    "player_o": null
  }
}'

echo
