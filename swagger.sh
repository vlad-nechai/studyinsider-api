#!/bin/bash

php ./vendor/bin/openapi -b ./app/swagger-constants.php -f yaml -o ./public/swagger.yaml ./app/