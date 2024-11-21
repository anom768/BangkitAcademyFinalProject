# Quiz API Spec

## Create Quiz API

Endpoint : POST /api/quiz

Headers :
- Authorization : token

Request Body :

```json
{
  "image" : "File image name",
  "audio" : "File audio name",
  "answer" : "answer"
}
```

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "image" : "File image name",
    "audio" : "File audio name"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Unauthorized"
}
```

## Update Quiz API

Endpoint : PUT /api/quiz/:id

Headers :
- Authorization : token

Request Body :

```json
{
  "image" : "File image name",
  "audio" : "File audio name",
  "answer" : "answer"
}
```

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "image" : "File image name",
    "audio" : "File audio name"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Unauthorized"
}
```

## Get Quiz API

Endpoint : GET /api/quiz

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : [
    {
      "id" : 1,
      "image" : "File image name",
      "audio" : "File audio name"
    },
    {
      "id" : 2,
      "image" : "File image name",
      "audio" : "File audio name"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors" : "Quiz is not found"
}
```

## Remove Quiz API

Endpoint : DELETE /api/quiz/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : "OK"
}
```

Response Body Error :

```json
{
  "errors" : "Quiz is not found"
}
```

## Answer Quiz API

Endpoint : POST /api/quiz/answer

Headers :
- Authorization : token

Request Body :

```json
{
  "id" : 1,
  "answer" : "answer"
}
```

Response Body Success :

```json
{
  "data" : "OK"
}
```

Response Body Error :

```json
{
  "errors" : "Wrong answer"
}