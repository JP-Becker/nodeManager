export default function DataTypeFilter(nodeType) {
    // Função para validar e retornar dinamicamente o tipo de node, recebe como parametro um node.type mapeado do nodeData
            switch (nodeType) {
                case 'MENU':
                    return 'nodeMenu';
                // IDEIA: CRIAR UM OBJETO AQUI COM A COR Q CADA TIPO DE NODE VAI TER, E OUTRAS PROPRIEDADES MUTÁVEIS QUE PODEM SER ALTERADAS DINAMICAMENTE
                case 'WEBLINK':
                    return 'nodeWeblink';

                case 'TEXT':
                    return 'nodeText';

                case 'OPTION':
                    return 'nodeOption';

                case 'IMAGE':
                    return 'nodeImage';

                case 'GO_TO_BLOCK':
                    return 'nodeGoToBlock';

                case 'REDIRECT_SERVICE':
                    return 'nodeRedirectService';

                default:
                    return null;
            }
}