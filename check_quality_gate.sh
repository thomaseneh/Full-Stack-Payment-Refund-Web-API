#!/bin/bash

# SonarQube details from environment variables
SONAR_HOST_URL="${SONAR_HOST_URL}"
SONAR_PROJECT_KEY="${SONAR_PROJECT_KEY}"
SONAR_TOKEN="${SONAR_TOKEN}"

# Fetch the latest analysis report ID
REPORT_ID=$(curl -s -u $SONAR_TOKEN: "$SONAR_HOST_URL/api/project_analyses/search?project=$SONAR_PROJECT_KEY" | jq -r '.analyses[0].key')

if [ -z "$REPORT_ID" ]; then
  echo "Failed to retrieve the latest report ID."
  exit 1
fi

# Check the quality gate status for the latest analysis
QUALITY_GATE_STATUS=$(curl -s -u $SONAR_TOKEN: "$SONAR_HOST_URL/api/qualitygates/project_status?projectKey=$SONAR_PROJECT_KEY" | jq -r '.projectStatus.status')

if [ "$QUALITY_GATE_STATUS" != "OK" ]; then
  echo "Quality gate failed with status: $QUALITY_GATE_STATUS"
  exit 1
else
  echo "Quality gate passed"
fi
