# Scrabble Score API

Simple Express server for calculating Scrabble word scores.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

1. Start server:
   ```
   yarn server
   ```

Server runs on `localhost:3001`.

## API Endpoints

### GET /api/greeting

Returns "Hello World!" greeting.

### POST /api/scrabble-score

Calculate Scrabble score for word.

Request body:
```json
{
  "word": "EXAMPLE"
}
```

Response:
```json
{
  "score": 16
}
```

## Error Handling

- Empty word: Returns error message.
- Invalid characters: Returns error with list of invalid characters.
Response:
```json
{
  "score": 0 
  "err": "Error message"
}
```

## Dependencies

- express
- body-parser
- express-pino-logger
- cors
