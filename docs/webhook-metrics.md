PROLIBU WEBHOOK METRICS
======
Los webhooks le permiten crear o configurar integraciones, que se suscriben a ciertos eventos en Prolibu.com. Cuando se activa uno de esos eventos, enviaremos una carga útil HTTP POST a la URL configurada del webhook. Para este caso en especial enviaremos las métricas de la propuestas cuyo estado actual sea "Ready" cada 1 hora con los datos actualizados de las interacciones del Lead o Cliente dentro de la propuesta. A continuación se presenta el cuerpo y cabeceras enviados por el webhook de Prolibu.com para el evento de "proposal_metrics".

```json
{
  "content-length": "2404",
  "authorization": "xxxxx-xxxx-001",
  "content-type": "application/json",
  "accept": "application/json"
}
```

```json
{
  "model": "proposal",
  "action": "metrics",
  "body": [
    {
      "proposalNumber": "VCPE47",
      "rating": "Cold",
      "lastSeen": "2021-03-04T16:31:10.949Z",
      "CCI": 0.00139979836732232,
      "views": 1,
      "id": "60410b4062342f0332089e62"
    },
    {
      "proposalNumber": "ZBEXFT",
      "rating": "Cold",
      "lastSeen": "2021-03-04T16:43:36.134Z",
      "CCI": 0.000907775311708679,
      "views": 1,
      "id": "60410e2362342f0332089e66"
    },
    {
      "proposalNumber": "E8ZNGR",
      "rating": "Cold",
      "lastSeen": "2021-03-08T22:41:14.775Z",
      "CCI": 0,
      "views": 1,
      "id": "6046a7fff76995041b3f00b2"
    },
    {
      "proposalNumber": "WS3ZRX",
      "rating": "Warm",
      "lastSeen": "2021-03-23T13:33:35.330Z",
      "CCI": 4.978419521513438,
      "views": 4,
      "id": "6059ee06b1fd5704f435facd"
    },
    {
      "proposalNumber": "9VCMSR",
      "rating": "Cold",
      "lastSeen": "2021-03-23T19:26:23.573Z",
      "CCI": 20.78859756619637,
      "views": 7,
      "id": "6059fc0e08d8080763bb6729"
    }
  ]
}
```


## Información adicional: 
* Para conocer más acerca de Prolibu Webhook visite el siguiente [link](https://nodriza-io.github.io/nodriza/#/reference-webhook).

## Artículos Relacionados
* Para conectarse con a un web service Prolibu visite el siguiente [link](https://nodriza-io.github.io/nodriza/#/guide).
* Para generar un Api Key Prolibu visite el siguiente [link](https://github.com/nodriza-io/nodriza/blob/master/docs/api-key.md).


---------------
© 2020 PROLIBU TECH SAS, ALL RIGHTS RESERVED.
