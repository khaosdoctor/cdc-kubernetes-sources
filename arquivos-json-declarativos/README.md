# Arquivos declarativos do cluster

Estes são os arquivos declarativos que vão criar nossos serviços, pods e qualquer parte da infraestrutura.

## Lista

- `pod.json`: Um pod simples sem nenhuma complexidade
- `pod-api.json`: Um pod com imagem customizada e variáveis de ambiente
- `pod-api-label.json`: O mesmo `pod-api` porém com labels e seletores
- `pod-api-service.json`: O Service que expõe o `pod-api-label.json` para fora do cluster
- `pod-api-ingress.json`: Ingress que vai dar o domínio para nosso `pod-api-label.json` em conjunto com o `pod-api-service.json`
- `pod-counter-volume.json`: É o arquivo que irá criar nosso pod com contador utilizando volumes efêmeros
- `pod-counter-service.json`: É o serviço que irá expor o nosso pod com contador
- `pod-counter-ingress.json`: É o ingress que fará o mapeamento de DNS do nosso contador
