export default function DataTypeFilter(nodeType) {
    // Função para validar e retornar dinamicamente o tipo de node, recebe como parametro um node.type mapeado do nodeData
            switch (nodeType) {
                case 'MENU':
                    return 'nodeMenu';

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