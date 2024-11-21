# Generative API Spec

## Create Generative API

Endpoint : POST /api/generative/:username

Headers :
- Authorization : token

Request Body :

```json
{
  "prompt" : "Text prompt"
}
```

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "image" : "File image name"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Unauthorized"
}
```

## Get Generative API

Endpoint : GET /api/generative/:username

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : [
    {
      "id" : 1,
      "image" : "File image name"
    },
    {
      "id" : 2,
      "image" : "File image name"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors" : "Image is not found"
}
```

## Remove Generative API

Endpoint : DELETE /api/generative/:id/user/:username

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
  "errors" : "Image is not found"
}
```