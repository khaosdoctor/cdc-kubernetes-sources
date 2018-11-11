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
- `mongo-pv.json`: Arquivo de criação do volume local para o mongodb
- `mongo-pvc.json`: Arquivo de criação para o PVC que irá consumir o PV acima
- `mongo-pod.json`: Arquivo de criação para o serviço do mongo usando volumes locais
- `azure-mongo-pvc.json`: Arquivo para criação de PVC utilizando o Azure Disk
- `azure-mongo-pod.json`: Cria um banco de dados MongoDB usando o Azure Disk como volume
- `db-secret.json`: Arquivo exemplo para a criação de um secret literal
- `pod-api-crypto-file.json`: Pod de criptografia usando um secret como volume
- `secret-api-crypto-file.json`: Secret utilizado para codificar o dado do pod anterior
- `pod-api-crypto-env.json`: Pod de criptografia identico ao de arquivos, porém usando variáveis de ambiente
- `secret-api-crypto-env.json`: Secret para completar o pod utilizando variáveis de ambiente 
- `pod-api-private-cr.json`: Arquivo de pod que utiliza um registro de contêineres privado criado na Azure
- `configmap-node-api.json`: Configmap criado para ser fonte de configurações para o capítulo de configmaps
