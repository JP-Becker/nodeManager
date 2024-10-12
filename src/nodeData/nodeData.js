export const nodeData = [
    {
        id: 'a2235f93-ab20-412a-8aa0-d16025c00af3',
        type: 'MENU',
        nextNodeId: null,
        content: {
            text: 'Sobre qual assunto você quer conversar?',
            options: [
                {
                    id: '2fcd8220-3a38-4eba-9663-adac420f81f7',
                    type: 'OPTION',
                    nextNodeId: '94df621e-221d-40b6-b1fe-9987dba6b6ab',
                    content: {
                        name: 'Configurações',
                    }
                },
                {
                    id: 'dcab466e-2199-46fd-a6a7-1cdc5424b963',
                    type: 'OPTION',
                    nextNodeId: 'd235cf5e-02cf-4927-9120-5ba5ff3b2a33',
                    content: {
                        name: 'Boas práticas',
                    }
                },
            ]
        }
    },
    //Configurações
    {
        id: '94df621e-221d-40b6-b1fe-9987dba6b6ab',
        type: 'MENU',
        nextNodeId: null,
        content: {
            text: 'Ótimo. Escolha a opção desejada:',
            options: [
                {
                    id: 'fc041a15-c5f0-4158-98a0-fa0949423764',
                    type: 'OPTION',
                    nextNodeId: 'b5ebbb08-7d71-4804-b679-1bb255d8b085',
                    content: {
                        name: 'Linha rádio WOM Zeus',
                    }
                },
                {
                    id: '8a3c9eeb-7dcf-46bd-91bf-3113506e01ad',
                    type: 'OPTION',
                    nextNodeId: '9bc19421-6df6-47bb-a64c-88a719fdb94a',
                    content: {
                        name: 'Linha rádio WOM',
                    }
                },
                {
                    id: '5dbb9565-8f07-45fc-b8fa-e9fdd61dfa39',
                    type: 'OPTION',
                    nextNodeId: '4e087116-314a-4f3b-91dd-ee47299895e7',
                    content: {
                        name: 'Linha rádio APC',
                    }
                },
            ]
        }
    },

    //Configurações - Linha rádio WOM Zeus
    {
        id: 'b5ebbb08-7d71-4804-b679-1bb255d8b085',
        type: 'MENU',
        nextNodeId: null,
        content: {
            text: 'Sobre qual assunto você deseja falar?',
            options: [
                {
                    id: 'da9a78da-73ec-46ed-9d9c-b2edeeefb81b',
                    type: 'OPTION',
                    nextNodeId: '1e2f3702-9101-401f-b3d5-8afac69b91b1',
                    content: {
                        name: 'Configurar WOM AC',
                    }
                },
                {
                    id: '0b330c1b-4635-4b85-b49e-377197626e78',
                    type: 'OPTION',
                    nextNodeId: '2f0bf202-a175-44d0-bf77-8a8d82fff8ae',
                    content: {
                        name: 'Alterar IP da LAN',
                    }
                },
            ]
        }
    },
    //Configurações - Linha rádio WOM Zeus - Configurar WOM AC
    {
        id: '1e2f3702-9101-401f-b3d5-8afac69b91b1',
        type: 'TEXT',
        nextNodeId: 'a669320b-1e95-4013-b7a9-e9188a2a0f37',
        content: {
            text: 'Ótimo. Aqui estão as instruções para configurar os rádios da linha WOM em modo ponto a ponto usando o WOM AC.',
        }
    },
    {
        id: 'a669320b-1e95-4013-b7a9-e9188a2a0f37',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=XW76-VY4Yhs',
            title: 'Assista ao vídeo',
            text: 'Guia para configurar o WOM AC em ponto a ponto',
        }
    },
    //Configurações - Linha rádio WOM Zeus - Alterar IP da LAN
    {
        id: '2f0bf202-a175-44d0-bf77-8a8d82fff8ae',
        type: 'TEXT',
        nextNodeId: '184e8f5d-9248-4624-af00-b7d6f3608df9',
        content: {
            text: 'Ótimo. Aqui estão as instruções para alterar o IP da LAN.',
        }
    },
    {
        id: '184e8f5d-9248-4624-af00-b7d6f3608df9',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=KTOiw0WBBvM',
            title: 'Assista ao vídeo',
            text: 'Guia para alterar o IP da LAN',
        }
    },
    //Configurações - Linha rádio WOM
    {
        id: '9bc19421-6df6-47bb-a64c-88a719fdb94a',
        type: 'MENU',
        nextNodeId: null,
        content: {
            text: 'Sobre qual assunto você deseja falar?',
            options: [
                {
                    id: '50191740-3b64-464a-a2ca-993dea6d4e10',
                    type: 'OPTION',
                    nextNodeId: '5788eb70-59f6-4ea2-9ecd-47879342a338',
                    content: {
                        name: 'Fixar IP na WAN',
                    }
                },
                {
                    id: 'd2e17dc5-8c31-4e3d-be97-035d2074379d',
                    type: 'OPTION',
                    nextNodeId: 'a12bc29d-c1e9-4114-9b89-3077ceb155c8',
                    content: {
                        name: 'Fixar data rate',
                    }
                },
                {
                    id: '7abf83a4-3b93-44dc-aae6-3077728229bf',
                    type: 'OPTION',
                    nextNodeId: '22f9df3c-ee62-4e6e-bf1f-6b4c15f5d176',
                    content: {
                        name: 'Configurar DMZ',
                    }
                },
                {
                    id: '3a6b8754-df12-4777-b22d-9593df7a9cee',
                    type: 'OPTION',
                    nextNodeId: 'ca43ed11-af8a-4cb8-bec6-59ab8f51be34',
                    content: {
                        name: 'Alterar potência de TX',
                    }
                },
                {
                    id: '34acc8ca-f14a-446e-8149-40234dddffe8',
                    type: 'OPTION',
                    nextNodeId: '7c49ece4-bf57-4119-952b-4604eb00a1d5',
                    content: {
                        name: 'Configurar o controle por IP',
                    }
                },
                {
                    id: '80ed0c6c-d9d2-48bb-a519-648f280632b6',
                    type: 'OPTION',
                    nextNodeId: '60aabf6b-d54d-45a4-b37d-18b2bad1e212',
                    content: {
                        name: 'Alterar IP da LAN',
                    }
                },
                {
                    id: 'ec6483e2-3de7-436b-959d-1d6ddc97e00b',
                    type: 'OPTION',
                    nextNodeId: '53728565-e488-4b3b-aa65-a0392b9943d5',
                    content: {
                        name: 'Configurar bridge',
                    }
                },
                {
                    id: 'cbbd7b48-fe4b-4369-99fd-a7f305333933',
                    type: 'OPTION',
                    nextNodeId: 'f47c95b9-97e3-4199-99a4-2e91057d4690',
                    content: {
                        name: 'Configurar redirecionamento de portas',
                    }
                },
            ]
        }
    },
    //Configurações - Linha rádio WOM - Fixar IP na WAN
    {
        id: '5788eb70-59f6-4ea2-9ecd-47879342a338',
        type: 'TEXT',
        nextNodeId: '0d0956c2-451e-4b6c-aa6e-73d269377b92',
        content: {
            text: 'Ótimo. Aqui estão as instruções para fixar o IP na WAN dos rádios da linha WOM.',
        }
    },
    {
        id: '0d0956c2-451e-4b6c-aa6e-73d269377b92',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=itwzxu7rIqk',
            title: 'Assista ao vídeo',
            text: 'Guia para fixar o IP na WAN (rede de área ampla)',
        }
    },
    //Configurações - Linha rádio WOM - 2. Fixar data rate
    {
        id: 'a12bc29d-c1e9-4114-9b89-3077ceb155c8',
        type: 'TEXT',
        nextNodeId: '13435450-9c01-4a26-b47b-19f48ab116e4',
        content: {
            text: 'Ótimo. Aqui estão as instruções para fixar o data rate dos rádios da linha WOM.',
        }
    },
    {
        id: '13435450-9c01-4a26-b47b-19f48ab116e4',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=JuNQZtaRe4w',
            title: 'Assista ao vídeo',
            text: 'Guia para fixar data rate (taxa de dados)',
        }
    },
    //Configurações - Linha rádio WOM - 3. Configurar DMZ
    {
        id: '22f9df3c-ee62-4e6e-bf1f-6b4c15f5d176',
        type: 'TEXT',
        nextNodeId: 'b976765e-0a6f-49b5-993b-d6a27b8ff7ae',
        content: {
            text: 'Ótimo. Aqui estão as instruções para configurar a DMZ dos rádios da linha WOM.',
        }
    },
    {
        id: 'b976765e-0a6f-49b5-993b-d6a27b8ff7ae',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=N-ag4mJ6Q10',
            title: 'Assista ao vídeo',
            text: 'Guia para configurar DMZ',
        }
    },
    //Configurações - Linha rádio WOM - 4. Alterar potência de TX
    {
        id: 'ca43ed11-af8a-4cb8-bec6-59ab8f51be34',
        type: 'TEXT',
        nextNodeId: '5dcbef78-bb31-4c24-a781-634eeacb4d6d',
        content: {
            text: 'Ótimo. Aqui estão as instruções para ajustar a potência de TX dos rádios da linha WOM.',
        }
    },
    {
        id: '5dcbef78-bb31-4c24-a781-634eeacb4d6d',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=hpFNwyTs6sg',
            title: 'Assista ao vídeo',
            text: 'Guia para alterar a potência de TX (Transmissão)',
        }
    },
    //Configurações - Linha rádio WOM - 5. Configurar o controle por IP
    {
        id: '7c49ece4-bf57-4119-952b-4604eb00a1d5',
        type: 'TEXT',
        nextNodeId: '6b011228-b86e-4740-9e1f-f5f1a667dc82',
        content: {
            text: 'Ótimo. Aqui estão as instruções para configurar o controle por IP dos rádios da linha WOM.',
        }
    },
    {
        id: '6b011228-b86e-4740-9e1f-f5f1a667dc82',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=Q6TTWvVK1ac',
            title: 'Assista ao vídeo',
            text: 'Guia para configurar o controle por IP',
        }
    },
    //Configurações - Linha rádio WOM - 6. Alterar IP da LAN
    {
        id: '60aabf6b-d54d-45a4-b37d-18b2bad1e212',
        type: 'TEXT',
        nextNodeId: 'e0963091-63ef-449c-aa39-85766ef1a479',
        content: {
            text: 'Ótimo. Aqui estão as instruções para alterar o IP da LAN nos rádios da linha WOM.',
        }
    },
    {
        id: 'e0963091-63ef-449c-aa39-85766ef1a479',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=EtxihZE1YMs',
            title: 'Assista ao vídeo',
            text: 'Guia para alterar IP da LAN',
        }
    },
    //Configurações - Linha rádio WOM - 7.  Configurar bridge
    {
        id: '53728565-e488-4b3b-aa65-a0392b9943d5',
        type: 'TEXT',
        nextNodeId: 'afd32cad-14d8-4a27-932a-4c8e058cc8ea',
        content: {
            text: 'Ótimo. Aqui estão as instruções para configurar a bridge dos rádios da linha WOM.',
        }
    },
    {
        id: 'afd32cad-14d8-4a27-932a-4c8e058cc8ea',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=q5RimswQ_UE',
            title: 'Assista ao vídeo',
            text: 'Guia para configurar dois WOM 5A em modo bridge ponto a ponto',
        }
    },
    //Configurações - Linha rádio WOM - 8. Configurar redirecionamento de portas
    {
        id: 'f47c95b9-97e3-4199-99a4-2e91057d4690',
        type: 'TEXT',
        nextNodeId: '68962b36-e21c-4859-bc8f-4a420b2adee5',
        content: {
            text: 'Ótimo. Aqui estão as instruções para configurar o redirecionamento de portas dos rádios da linha WOM.',
        }
    },
    {
        id: '68962b36-e21c-4859-bc8f-4a420b2adee5',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=NoACnfqZxY4',
            title: 'Assista ao vídeo',
            text: 'Guia para configurar redirecionamento de portas - i5123',
        }
    },
    //Configurações - Linha rádio APC
    {
        id: '4e087116-314a-4f3b-91dd-ee47299895e7',
        type: 'MENU',
        nextNodeId: null,
        content: {
            text: 'Sobre qual assunto você deseja falar?',
            options: [
                {
                    id: 'bd05edf6-e35a-4ad9-9ecc-b86662b9e762',
                    type: 'OPTION',
                    nextNodeId: '8b057956-2064-4aba-8923-63611e01d1f2',
                    content: {
                        name: 'Configurar atualização automática no APC 5A',
                    }
                },
                {
                    id: '9033789f-45a6-4fb2-ab8a-e3c967109147',
                    type: 'OPTION',
                    nextNodeId: '554b487f-d214-43db-8681-3d33cc548800',
                    content: {
                        name: 'Instalar kit de conexão sem fio APC 5A 15',
                    }
                },
                {
                    id: 'c5bd73ac-028e-45eb-a752-01531b6eb4ba',
                    type: 'OPTION',
                    nextNodeId: '3a07164d-cd05-4dd4-8484-c21c78dffc7e',
                    content: {
                        name: 'Configurar atualização automática no APC 5A',
                    }
                },
                {
                    id: '0b0cbd83-1c68-4dfc-8c53-554dc2db1562',
                    type: 'OPTION',
                    nextNodeId: '709195df-d8a0-42ef-a509-470525bccbb7',
                    content: {
                        name: 'Configurar dois APC 5A como bridge ponto a ponto',
                    }
                },
            ]
        }
    },
    //Configurações - Linha rádio APC - 1. Configurar atualização automática no APC 5A
    {
        id: '8b057956-2064-4aba-8923-63611e01d1f2',
        type: 'TEXT',
        nextNodeId: 'aacbce1c-04b6-48a8-bb07-82158491274b',
        content: {
            text: 'Ótimo. Aqui estão as instruções para configurar a atualização automática no APC 5A.',
        }
    },
    {
        id: 'aacbce1c-04b6-48a8-bb07-82158491274b',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=gd1ZEvxl2IM',
            title: 'Assista ao vídeo',
            text: 'Guia para configurar a atualização automática no APC 5A',
        }
    },
    //Configurações - Linha rádio APC - Instalar kit de conexão sem fio APC 5A 15
    {
        id: '554b487f-d214-43db-8681-3d33cc548800',
        type: 'TEXT',
        nextNodeId: 'f05355d0-d894-4835-b5ad-102dab01e968',
        content: {
            text: 'Ótimo. Aqui estão as instruções para instalar o kit de conexão sem fio APC 5A 15.',
        }
    },
    {
        id: 'f05355d0-d894-4835-b5ad-102dab01e968',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=4tt4CrMa1ow',
            title: 'Assista ao vídeo',
            text: 'Guia para instalar o kit de conexão sem fio APC 5A 15',
        }
    },
    //Configurações - Linha rádio APC - 3. Configurar atualização automática no APC 5A
    {
        id: '3a07164d-cd05-4dd4-8484-c21c78dffc7e',
        type: 'TEXT',
        nextNodeId: 'a43e5b8a-16bb-41f6-8171-0f721adf0744',
        content: {
            text: 'Ótimo. Aqui estão as instruções para configurar a atualização automática no APC 5A.',
        }
    },
    {
        id: 'a43e5b8a-16bb-41f6-8171-0f721adf0744',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=gd1ZEvxl2IM',
            title: 'Assista ao vídeo',
            text: 'Guia para configurar a atualização automática no APC 5A',
        }
    },
    //Configurações - Linha rádio APC - 4. Configurar dois APC 5A como bridge ponto a ponto
    {
        id: '709195df-d8a0-42ef-a509-470525bccbb7',
        type: 'TEXT',
        nextNodeId: '30a3560c-264e-4f19-b882-82d5b7241f01',
        content: {
            text: 'Ótimo. Aqui estão as instruções para configurar dois APC 5A como uma bridge ponto a ponto.',
        }
    },
    {
        id: '30a3560c-264e-4f19-b882-82d5b7241f01',
        type: 'WEBLINK',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            url: 'https://www.youtube.com/watch?v=P8Zka2M_XzU',
            title: 'Assista ao vídeo',
            text: 'Guia para configurar dois APC 5A como uma bridge ponto a ponto',
        }
    },
    //Boas praticas
    {
        id: 'd235cf5e-02cf-4927-9120-5ba5ff3b2a33',
        type: 'MENU',
        nextNodeId: null,
        content: {
            text: 'Sobre qual assunto você deseja falar?',
            options: [
                {
                    id: '10ec619e-dbaa-4105-99fb-72cf36774349',
                    type: 'OPTION',
                    nextNodeId: '83e99e30-d0f7-40c4-9028-836b2ddce93b',
                    content: {
                        name: 'Cenário',
                    }
                },
                {
                    id: 'c5eb453b-9d09-419a-b094-64d74f20512c',
                    type: 'OPTION',
                    nextNodeId: '50d5425b-81cd-40eb-a1ed-8cefab29d9b3',
                    content: {
                        name: 'Atualização',
                    }
                },
                {
                    id: '25327d13-376a-4e20-be38-10b3a00c0ca3',
                    type: 'OPTION',
                    nextNodeId: '77d7e858-0f48-441e-95b9-a9aff387dc56',
                    content: {
                        name: 'Cenários em elevador',
                    }
                },
            ]
        }
    },
    // boas praticas - cenario
    {
        id: '83e99e30-d0f7-40c4-9028-836b2ddce93b',
        type: 'IMAGE',
        nextNodeId: '75777dce-5321-4f52-89c3-6a87c7efd5c7',
        content: {
            url: 'https://botminio.apps.intelbras.com.br/redes/cenarioradio.png',
            title: null,
            text: null,
        }
    },
    {
        id: '75777dce-5321-4f52-89c3-6a87c7efd5c7',
        type: 'TEXT',
        nextNodeId: '94accc2b-84c8-4924-8f75-84180f4c221e',
        content: {
            text: '🛰️ Para garantir uma conexão de qualidade, é importante que os rádios tenham uma linha de visada clara, sem obstáculos entre eles.',
        }
    },
    {
        id: '94accc2b-84c8-4924-8f75-84180f4c221e',
        type: 'TEXT',
        nextNodeId: 'e37ef259-35c4-4088-a478-646bbd52adf4',
        content: {
            text: '📡 Também é essencial respeitar a zona de Fresnel, o que ajuda a manter a estabilidade da comunicação.',
        }
    },
    {
        id: 'e37ef259-35c4-4088-a478-646bbd52adf4',
        type: 'TEXT',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            text: '🛡️ Outro ponto importante é utilizar cabeamento homologado, evitando possíveis problemas no cenário. Para distâncias de até 100 metros, recomendamos cabos 100% de cobre, garantindo o melhor desempenho.',
        }
    },
    // boas praticas - atualizaçao
    {
        id: '50d5425b-81cd-40eb-a1ed-8cefab29d9b3',
        type: 'TEXT',
        nextNodeId: '4c0b5690-68ee-49f7-9c67-a3de306835e5',
        content: {
            text: '🚀 Manter seus equipamentos atualizados é super importante.',
        }
    },
    {
        id: '4c0b5690-68ee-49f7-9c67-a3de306835e5',
        type: 'TEXT',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            text: '🚀 Assim, você sempre aproveita as inovações e correções que lançamos.',
        }
    },
    // boas praticas - Cenários em elevador
    {
        id: '77d7e858-0f48-441e-95b9-a9aff387dc56',
        type: 'TEXT',
        nextNodeId: '936c1595-bcb1-492e-ace7-6d7b84f2bcd2',
        content: {
            text: '🚀 Para garantir uma comunicação eficiente entre os rádios, recomendamos sempre manter uma linha de visada clara.',
        }
    },
    {
        id: '936c1595-bcb1-492e-ace7-6d7b84f2bcd2',
        type: 'TEXT',
        nextNodeId: '6958a29b-c835-40eb-9efc-973f5aa3a86e',
        content: {
            text: '🚀 Em instalações em elevadores, é ideal utilizar rádios com tecnologia ATPC.',
        }
    },
    {
        id: '6958a29b-c835-40eb-9efc-973f5aa3a86e',
        type: 'TEXT',
        nextNodeId: 'dea54744-1253-41d8-8aaa-e098701620d3',
        content: {
            text: ' 🚀 Para o melhor desempenho, sugerimos instalar um par de rádios por foço, especialmente em edifícios com elevadores social e de serviço, onde cada elevador deve ter seu próprio ponto a ponto.',
        }
    },
    // Finalização
    {
        id: 'dea54744-1253-41d8-8aaa-e098701620d3',
        type: 'MENU',
        nextNodeId: null,
        content: {
            text: 'Posso encerrar seu atendimento?',
            options: [
                {
                    id: '3db0f815-9fd8-422c-aa60-0b69abe9dcdc',
                    type: 'OPTION',
                    nextNodeId: '5da7401e-a883-409e-a9f0-b939f5cba0c5',
                    content: {
                        name: 'Finalizar atendimento',
                    }
                },
                {
                    id: '8ffa9b7a-8d23-4a8c-9f71-83bc35c4e1d3',
                    type: 'OPTION',
                    nextNodeId: '12fadfb8-3f6e-4e8c-86cc-32afa4294d40',
                    content: {
                        name: 'Preciso de ajuda',
                        config: {
                            rule: null,
                            queue: '',
                        }
                    }
                },
            ]
        }
    },

    // HORARIO DE ATENDIMENTO (VALIDAÇÃO DE HORARIO ANTES DO CADASTRO)
    {
        id: '12fadfb8-3f6e-4e8c-86cc-32afa4294d40',
        type: 'GO_TO_BLOCK',
        nextNodeId: 'dca0807f-e431-45f6-b25f-d39fd0f71a01',
        content: {
            id: 'd506f400-22cf-434d-b31c-2c7b9a988fa7',
        }
    },

    // DIRECTOR
    {
        id: 'dca0807f-e431-45f6-b25f-d39fd0f71a01',
        type: 'GO_TO_BLOCK',
        nextNodeId: null,
        content: {
            id: '329d9c58-bbb8-41d3-9fa1-0a73b736b393',
        }
    },

    // CADASTRO
    {
        id: 'daf6397a-f659-4586-a6f6-306fe2984a19',
        type: 'GO_TO_BLOCK',
        nextNodeId: '0fda2fc3-b906-404a-bb98-684cad5275dd',
        content: {
            id: '40e3178d-e1be-4f82-b296-73378f7cd53e',
        }
    },

    // HORARIO DE ATENDIMENTO (VALIDAÇÃO DE HORARIO DEPOIS DO CADASTRO)
    {
        id: '0fda2fc3-b906-404a-bb98-684cad5275dd',
        type: 'GO_TO_BLOCK',
        nextNodeId: 'ca67b49e-0d75-49e8-9ce3-773b6df2059c',
        content: {
            id: 'd506f400-22cf-434d-b31c-2c7b9a988fa7',
        }
    },

    // ATENDIMENTO HUMANO
    {
        id: 'ca67b49e-0d75-49e8-9ce3-773b6df2059c',
        type: 'GO_TO_BLOCK',
        nextNodeId: null,
        content: {
            id: '252c9326-cffd-430b-b53e-e5cfad89aab8',
        }
    },

    // PESQUISA COM NOTA
    {
        id: '40d3f64f-07b9-4a22-ac21-37848a0ad2e4',
        type: 'GO_TO_BLOCK',
        nextNodeId: null,
        content: {
            id: '23bcf87c-2b45-4798-8ea8-5ba095b1f2eb',
        }
    },

    // PESQUISA SEM NOTA
    {
        id: '5da7401e-a883-409e-a9f0-b939f5cba0c5',
        type: 'GO_TO_BLOCK',
        nextNodeId: null,
        content: {
            id: 'fc452091-218e-4e7f-8344-39c249d470f9',
        }
    },

    // ORIGEM
    {
        id: '40d3f64f-07b9-4a22-ac21-37848a0ad2e4',
        type: 'GO_TO_BLOCK',
        nextNodeId: null,
        content: {
            id: 'e118b07c-10cb-4404-94d4-834f57bc4dde',
        }
    },

    {
        id: 'e11481d3-5ad4-4c0e-b6d9-76b80426a958',
        type: 'REDIRECT_SERVICE',
        nextNodeId: null,
        content: {
            serviceName: 'Comandos analogicos',
            serviceBody: JSON.stringify({ bot: "{{config.bot}}" }),
        }
    },
]

