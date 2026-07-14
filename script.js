/* =====================================================
   STOCKFLOW PRO V4.1
   Base de Produtos
===================================================== */

let produtos = JSON.parse(
    localStorage.getItem("sf_produtos_v4_auto")
) || [
 

/* COCA-COLA */

{
    codigo:"101",
    nome:"Coca-Cola KS Normal",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:24,
    estoqueMinimo:60,
    custo:3.50,
    venda:6.90,
},

{
    codigo:"102",
    nome:"Coca-Cola KS Zero",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:24,
    estoqueMinimo:60,
    custo:3.50,
    venda:6.90,
},

{
    codigo:"103",
    nome:"Coca-Cola 350ml Normal",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:8.00,
},

{
    codigo:"104",
    nome:"Coca-Cola 350ml Zero",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:8.00,

},

{
    codigo:"105",
    nome:"Coca-Cola 600ml Normal",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:7.00,
    venda:12.00,
},

{
    codigo:"106",
    nome:"Coca-Cola 600ml Zero",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:7.00,
    venda:12.00,

},

{
    codigo:"107",
    nome:"Coca-Cola 1000ml Normal",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:7.00,
    venda:21.00,

},

/* PEPSI */

{
    codigo:"120",
    nome:"Pepsi 350ml Normal",
    categoria:"Refrigerante",
    fornecedor:"Pepsi",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:3.00,
    venda:8.50,
},

{
    codigo:"121",
    nome:"Pepsi Black 350ml",
    categoria:"Refrigerante",
    fornecedor:"Pepsi",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:3.00,
    venda:8.50,
},

{
    codigo:"122",
    nome:"Pepsi 600ml Normal",
    categoria:"Refrigerante",
    fornecedor:"Pepsi",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:12.30,
},

{
    codigo:"123",
    nome:"Pepsi Zero 600ml",
    categoria:"Refrigerante",
    fornecedor:"Pepsi",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:12.30,
},

/* GUARANÁ */

{
    codigo:"140",
    nome:"Guaraná Antarctica Lata Normal",
    categoria:"Refrigerante",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:4.00,
    venda:8.50,
},

{
    codigo:"141",
    nome:"Guaraná Antarctica Lata Zero",
    categoria:"Refrigerante",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:4.00,
    venda:8.50,
},

{
    codigo:"142",
    nome:"Guaraná Antarctica 600ml Normal",
    categoria:"Refrigerante",
    fornecedor:"Ambev",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:12.30,
},

{
    codigo:"143",
    nome:"Guaraná Antarctica 600ml Zero",
    categoria:"Refrigerante",
    fornecedor:"Ambev",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:12.30,
},

{
    codigo:"144",
    nome:"Guaraná Antarctica 1000ml Normal",
    categoria:"Refrigerante",
    fornecedor:"Ambev",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:14.90,
},

/* SODA E TÔNICAS */

{
    codigo:"160",
    nome:"Soda Limonada Normal",
    categoria:"Refrigerante",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:4.00,
    venda:8.50,
},

{
    codigo:"161",
    nome:"Soda Limonada Zero",
    categoria:"Refrigerante",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:4.00,
    venda:8.50,
},

{
    codigo:"162",
    nome:"Água Tônica Normal",
    categoria:"Refrigerante",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:4.00,
    venda:8.50,
},

{
    codigo:"163",
    nome:"Água Tônica Zero",
    categoria:"Refrigerante",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:4.00,
    venda:8.50,
},

{
    codigo:"164",
    nome:"Schweppes Citrus",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:4.00,
    venda:8.50,
},

{
    codigo:"165",
    nome:"Schweppes Tônica",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:4.00,
    venda:8.50,
},

{
    codigo:"166",
    nome:"Schweppes Ginger Ale",
    categoria:"Refrigerante",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:4.00,
    venda:8.50,
},

/* ÁGUAS */

{
    codigo:"180",
    nome:"Água Crystal 500ml",
    categoria:"Água",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:1.00,
    venda:6.30,
},

{
    codigo:"181",
    nome:"Água Crystal sem Gás",
    categoria:"Água",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:1.00,
    venda:6.30,
},

{
    codigo:"182",
    nome:"Água Crystal com Gás",
    categoria:"Água",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:1.00,
    venda:6.50,
},

/* ENERGÉTICOS */

{
    codigo:"200",
    nome:"Monster Energy",
    categoria:"Energético",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"201",
    nome:"Monster Ultra",
    categoria:"Energético",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"202",
    nome:"Monster Mango Loco",
    categoria:"Energético",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"203",
    nome:"Monster Pipeline Punch",
    categoria:"Energético",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"204",
    nome:"Monster Absolutely Zero",
    categoria:"Energético",
    fornecedor:"Coca-Cola",
    unidadesPorFardo:6,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

/* CERVEJAS */

{
    codigo:"300",
    nome:"Original 600ml",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"301",
    nome:"Brahma Duplo Malte",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"302",
    nome:"Skol Pilsen",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:14.90
},

{
    codigo:"303",
    nome:"Antarctica Original",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:14.90,
},

{
    codigo:"304",
    nome:"Stella Artois Long Neck",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"305",
    nome:"Corona Extra Long Neck",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:15.90,
},

{
    codigo:"306",
    nome:"Budweiser Long Neck",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"307",
    nome:"Spaten Long Neck",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:18.90,
},

{
    codigo:"308",
    nome:"Patagonia Amber Lager",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.50,
},

{
    codigo:"309",
    nome:"Patagonia Weisse",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.50,
},

{
    codigo:"310",
    nome:"Beck's Long Neck",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"311",
    nome:"Colorado Appia",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"312",
    nome:"Colorado Ribeirão Lager",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"313",
    nome:"Bohemia Puro Malte",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"314",
    nome:"Brahma Chopp",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:14.90,
},

{
    codigo:"315",
    nome:"Skol Beats",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:14.90,
},

{
    codigo:"316",
    nome:"Michelob Ultra",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,

},

{
    codigo:"317",
    nome:"Budweiser Zero",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:17.90,
},

{
    codigo:"318",
    nome:"Corona Cero",
    categoria:"Cerveja",
    fornecedor:"Ambev",
    unidadesPorFardo:12,
    estoqueMinimo:60,
    custo:5.00,
    venda:15.90,
},

];

/* =====================================================
   CARDÁPIO CASA FEIJUCA
===================================================== */

function criarItem(codigo, nome, categoria, venda){
    return {
        codigo,
        nome,
        categoria,
        fornecedor:"Casa Feijuca",
        unidadesPorFardo:1,
        estoqueMinimo:0,
        custo:0,
        venda,
        controlaEstoque:false
    };
}

const novosProdutos = [

    /* PIZZAS TRADICIONAIS */
    criarItem("P001","Calabresa","Pizza A La Carte",65.90),
    criarItem("P002","Calabresa com Cebola","Pizza A La Carte",65.90),
    criarItem("P003","Bacon","Pizza A La Carte",65.90),
    criarItem("P004","Milho com Bacon","Pizza A La Carte",65.90),
    criarItem("P005","Brócolis com Bacon","Pizza A La Carte",65.90),
    criarItem("P006","Pepperoni","Pizza A La Carte",65.90),
    criarItem("P007","Linguiça Blumenau","Pizza A La Carte",65.90),
    criarItem("P008","Romana","Pizza A La Carte",65.90),
    criarItem("P009","Mexicana","Pizza A La Carte",65.90),
    criarItem("P010","Baiana","Pizza A La Carte",65.90),
    criarItem("P011","Italiana","Pizza A La Carte",65.90),
    criarItem("P012","Frango com Catupiry","Pizza A La Carte",65.90),
    criarItem("P013","Frango Defumado","Pizza A La Carte",65.90),
    criarItem("P014","Frango com Milho","Pizza A La Carte",65.90),
    criarItem("P015","Atum","Pizza A La Carte",65.90),
    criarItem("P016","Atum com Cebola","Pizza A La Carte",65.90),
    criarItem("P017","4 Queijos","Pizza A La Carte",65.90),
    criarItem("P018","Muçarela","Pizza A La Carte",65.90),
    criarItem("P019","Milho","Pizza A La Carte",65.90),
    criarItem("P020","Brócolis","Pizza A La Carte",65.90),
    criarItem("P021","Palmito","Pizza A La Carte",65.90),
    criarItem("P022","Brócolis com Palmito","Pizza A La Carte",65.90),
    criarItem("P023","Alho e Óleo","Pizza A La Carte",65.90),
    criarItem("P024","Brócolis com Milho","Pizza A La Carte",65.90),

    /* PIZZAS ESPECIAIS */
    criarItem("P025","Bacon com Mel","Pizza A La Carte",75.90),
    criarItem("P026","Fritz","Pizza A La Carte",75.90),
    criarItem("P027","Moda do Pizzaiolo","Pizza A La Carte",75.90),
    criarItem("P028","Frango Especial","Pizza A La Carte",75.90),
    criarItem("P029","Frango à Paris","Pizza A La Carte",75.90),
    criarItem("P030","Strogonoff de Frango","Pizza A La Carte",75.90),
    criarItem("P031","Filé à Paris","Pizza A La Carte",75.90),
    criarItem("P032","Filé com Fritas","Pizza A La Carte",75.90),
    criarItem("P033","Filé com Cheddar","Pizza A La Carte",75.90),
    criarItem("P034","Filé com Alho e Óleo","Pizza A La Carte",75.90),
    criarItem("P035","Filé com Gorgonzola","Pizza A La Carte",75.90),
    criarItem("P036","Costela com BBQ","Pizza A La Carte",75.90),
    criarItem("P037","Costela com Melado","Pizza A La Carte",75.90),
    criarItem("P038","Carne Seca","Pizza A La Carte",75.90),
    criarItem("P039","Churrasco","Pizza A La Carte",75.90),
    criarItem("P040","Strogonoff de Carne","Pizza A La Carte",75.90),
    criarItem("P041","Costelinha Suína","Pizza A La Carte",75.90),
    criarItem("P042","Velho Oeste","Pizza A La Carte",75.90),
    criarItem("P043","Camarão","Pizza A La Carte",75.90),
    criarItem("P044","Aliche","Pizza A La Carte",75.90),
    criarItem("P045","Salmão Defumado","Pizza A La Carte",75.90),
    criarItem("P046","5 Queijos","Pizza A La Carte",75.90),
    criarItem("P047","Queijo Brie com Geleia","Pizza A La Carte",75.90),
    criarItem("P048","Gorgonzola com Geleia","Pizza A La Carte",75.90),
    criarItem("P049","Gorgonzola","Pizza A La Carte",75.90),
    criarItem("P050","Rúcula Especial","Pizza A La Carte",75.90),
    criarItem("P051","Rúcula com Tomate Seco","Pizza A La Carte",75.90),
    criarItem("P052","Alho Poró","Pizza A La Carte",75.90),
    criarItem("P053","Cebola Crispy","Pizza A La Carte",75.90),
    criarItem("P054","Ratatouille","Pizza A La Carte",75.90),
    criarItem("P055","Genovese","Pizza A La Carte",75.90),
    criarItem("P056","Abobrinha","Pizza A La Carte",75.90),
    criarItem("P057","Guacamole","Pizza A La Carte",75.90),
    criarItem("P058","Siciliana","Pizza A La Carte",75.90),
    criarItem("P059","Champignon","Pizza A La Carte",75.90),
    criarItem("P060","Frango e Fritas","Pizza A La Carte",75.90),

    /* PIZZAS DOCES */
    criarItem("PD001","Sensação Branca","Pizza Doce",75.90),
    criarItem("PD002","Sensação Preta","Pizza Doce",75.90),
    criarItem("PD003","Confete Branco","Pizza Doce",75.90),
    criarItem("PD004","Confete Preto","Pizza Doce",75.90),
    criarItem("PD005","Charge Branco","Pizza Doce",75.90),
    criarItem("PD006","Charge Preto","Pizza Doce",75.90),
    criarItem("PD007","Brigadeiro","Pizza Doce",75.90),
    criarItem("PD008","Prestígio","Pizza Doce",75.90),
    criarItem("PD009","Beijinho","Pizza Doce",75.90),
    criarItem("PD010","Açaí","Pizza Doce",75.90),
    criarItem("PD011","Pistache","Pizza Doce",75.90),
    criarItem("PD012","Merengue","Pizza Doce",75.90),
    criarItem("PD013","Amarula","Pizza Doce",75.90),
    criarItem("PD014","Danone","Pizza Doce",75.90),
    criarItem("PD015","Chico Balanceado","Pizza Doce",75.90),
    criarItem("PD016","Banana com Canela","Pizza Doce",75.90),
    criarItem("PD017","Abacaxi com Coco","Pizza Doce",75.90),
    criarItem("PD018","Torta Mineira","Pizza Doce",75.90),
    criarItem("PD019","Torta Alemã","Pizza Doce",75.90),
    criarItem("PD020","Negresco","Pizza Doce",75.90),

    /* SUCOS */
    criarItem("S001","Suco Abacaxi Copo","Sucos",12.50),
    criarItem("S002","Suco Abacaxi Jarra","Sucos",21.90),
    criarItem("S003","Suco Abacaxi com Hortelã Copo","Sucos",12.90),
    criarItem("S004","Suco Abacaxi com Hortelã Jarra","Sucos",22.90),
    criarItem("S005","Suco Laranja Copo","Sucos",12.50),
    criarItem("S006","Suco Laranja Jarra","Sucos",21.90),
    criarItem("S007","Suco Limão Copo","Sucos",12.50),
    criarItem("S008","Suco Limão Jarra","Sucos",21.90),
    criarItem("S009","Suco Maracujá Copo","Sucos",12.50),
    criarItem("S010","Suco Maracujá Jarra","Sucos",21.90),
    criarItem("S011","Suco Morango Copo","Sucos",14.50),
    criarItem("S012","Suco Morango Jarra","Sucos",23.90),
    criarItem("S013","Suco Uva Copo","Sucos",12.50),
    criarItem("S014","Suco Uva Jarra","Sucos",21.90),
    criarItem("S015","Limonada Suíça Copo","Sucos",13.40),
    criarItem("S016","Limonada Suíça Jarra","Sucos",22.50),

    /* SODAS ITALIANAS */
    criarItem("SI001","Soda Italiana Frutas Vermelhas","Soda Italiana",19.40),
    criarItem("SI002","Soda Italiana Maçã Verde","Soda Italiana",19.40),
    criarItem("SI003","Soda Italiana Gengibre","Soda Italiana",19.40),

    /* BEBIDAS QUENTES */
    criarItem("BQ001","Johnnie Walker Red Label","Bebidas Quentes",16.90),
    criarItem("BQ002","Underberg","Bebidas Quentes",14.50),
    criarItem("BQ003","Jack Daniels","Bebidas Quentes",20.90),
    criarItem("BQ004","Steinhaeger","Bebidas Quentes",13.90),
    criarItem("BQ005","Vodca Smirnoff","Bebidas Quentes",13.50),
    criarItem("BQ006","Tequila","Bebidas Quentes",21.20),
    criarItem("BQ007","Vodca Kalvelage","Bebidas Quentes",15.60),
    criarItem("BQ008","Rum Bacardi","Bebidas Quentes",13.50),
    criarItem("BQ009","Campari","Bebidas Quentes",13.90),
    criarItem("BQ010","Cachaça da Casa","Bebidas Quentes",13.50),
    criarItem("BQ011","Licor Jägermeister","Bebidas Quentes",17.90),

    /* VINHOS */
    criarItem("V001","Taça Vinho Tinto Suave","Vinhos",17.70),
    criarItem("V002","Jarra Vinho Tinto Suave","Vinhos",36.50),
    criarItem("V003","Taça Vinho Tinto Seco","Vinhos",31.40),
    criarItem("V004","Jarra Vinho Tinto Seco","Vinhos",52.40),

    /* DRINKS */
    criarItem("D001","Batidinha","Drinks",19.90),
    criarItem("D002","Carinhoso","Drinks",20.90),
    criarItem("D003","Garota de Ipanema","Drinks",26.50),
    criarItem("D004","Gin Tônica","Drinks",28.90),
    criarItem("D005","Juruloka","Drinks",22.50),
    criarItem("D006","Mojito","Drinks",24.90),
    criarItem("D007","Mandarin Sunrise","Drinks",25.50),
    criarItem("D008","Piña Colada","Drinks",24.50),
    criarItem("D009","Bem Querer","Drinks",20.50),
    criarItem("D010","Velha Infância","Drinks",22.90),

    /* CAIPIRINHAS */
    criarItem("C001","Caipirinha Cachaça Limão","Caipirinhas",25.90),
    criarItem("C002","Caipirinha Cachaça Morango","Caipirinhas",27.30),
    criarItem("C003","Caipirinha Vodca Limão","Caipirinhas",27.20),
    criarItem("C004","Caipirinha Vodca Morango","Caipirinhas",28.90),
    criarItem("C005","Caipirinha Steinhaeger Limão","Caipirinhas",27.20),
    criarItem("C006","Caipirinha Steinhaeger Morango","Caipirinhas",28.90),
    criarItem("C007","Caipirinha Vinho Tinto Limão","Caipirinhas",25.90),
    criarItem("C008","Caipirinha Vinho Tinto Morango","Caipirinhas",26.80)
];

novosProdutos.forEach(item => {
    const existe = produtos.some(produto => produto.codigo === item.codigo);

    if(!existe){
        produtos.push(item);
    }
});

/* =====================================================
   Estruturas principais do sistema
===================================================== */

let recebimentos = JSON.parse(
    localStorage.getItem("sf_recebimentos_v4_auto")
) || [];

let saidas = JSON.parse(
    localStorage.getItem("sf_saidas_v4_auto")
) || [];

let historico = JSON.parse(
    localStorage.getItem("sf_historico_v4_auto")
) || [];

let inventarios = JSON.parse(
    localStorage.getItem("sf_inventarios_v5")
) || [];

/* =====================================================
   MESAS, COMANDAS E ESTOQUE COZINHA
===================================================== */

let mesas = JSON.parse(
    localStorage.getItem("cf_mesas_v8")
) || [];

let pagamentos = JSON.parse(
    localStorage.getItem("cf_pagamentos_v1")
) || [];

let comandas = JSON.parse(
    localStorage.getItem("cf_comandas_v8")
) || [];

let estoqueCozinha = JSON.parse(
    localStorage.getItem("cf_estoque_cozinha_v8")
) || [
    {
        id:1,
        nome:"Feijão Preto",
        categoria:"Grãos",
        quantidade:25,
        unidade:"kg",
        local:"Despensa"
    },
    {
        id:2,
        nome:"Arroz",
        categoria:"Grãos",
        quantidade:30,
        unidade:"kg",
        local:"Despensa"
    },
    {
        id:3,
        nome:"Queijo Mussarela",
        categoria:"Laticínio",
        quantidade:18,
        unidade:"kg",
        local:"Câmara fria"
    },
    {
        id:4,
        nome:"Massa de Pizza",
        categoria:"Pizzaria",
        quantidade:80,
        unidade:"un",
        local:"Câmara fria"
    },
    {
        id:5,
        nome:"Calabresa",
        categoria:"Carnes",
        quantidade:12,
        unidade:"kg",
        local:"Câmara fria"
    }
];

let fornecedores = JSON.parse(
    localStorage.getItem("sf_fornecedores_v1")
) || [
    {
        id:1,
        razaoSocial:"Coca-Cola FEMSA Brasil",
        nomeFantasia:"Coca-Cola",
        cnpj:"00.000.000/0001-00",
        telefone:"(47) 99999-0001",
        email:"contato@cocacola.com",
        contato:"Representante Coca-Cola"
    },
    {
        id:2,
        razaoSocial:"Ambev S.A.",
        nomeFantasia:"Ambev",
        cnpj:"00.000.000/0002-00",
        telefone:"(47) 99999-0002",
        email:"contato@ambev.com",
        contato:"Representante Ambev"
    },
    {
        id:3,
        razaoSocial:"Heineken Brasil",
        nomeFantasia:"Heineken",
        cnpj:"00.000.000/0003-00",
        telefone:"(47) 99999-0003",
        email:"contato@heineken.com",
        contato:"Representante Heineken"
    }
];

/* =====================================================
   LOGIN DO SISTEMA
===================================================== */
let usuarios = [
    {
        usuario:"aline",
        senha:"123",
        nome:"Aline",
        perfil:"Administrador",
        permissoes:[
            "dashboard","mesas","caixa","lancamento","produtos",
            "fornecedores","recebimento","conferencia","armazenamento",
            "estoque","cozinha","saida","inventario","perdas",
            "financeiro","historico", "usuarios","configuracoes"
        ]
    },

    {
    usuario:"gerente",
    senha:"123",
    nome:"Gerente",
    perfil:"Gerente",
    permissoes:[
        "dashboard",
        "mesas",
        "caixa",
        "lancamento",
        "recebimento",
        "conferencia",
        "armazenamento",
        "estoque",
        "cozinha",
        "saida",
        "inventario",
        "perdas",
        "historico"
    ]

    },

    {
        usuario:"sol",
        senha:"123",
        nome:"Sol",
        perfil:"Caixa",
        permissoes:["caixa","mesas","lancamento","financeiro","historico"]
    },
    {
        usuario:"julio",
        senha:"123",
        nome:"Julio",
        perfil:"Garçom",
        permissoes:["mesas","lancamento"]
    },
    {
        usuario:"dossi",
        senha:"123",
        nome:"Dossi",
        perfil:"Garçom",
        permissoes:["mesas","lancamento"]
    },
    {
        usuario:"carlos",
        senha:"123",
        nome:"Carlos",
        perfil:"Garçom",
        permissoes:["mesas","lancamento"]
    },
    {
        usuario:"luiz",
        senha:"123",
        nome:"Luiz",
        perfil:"Garçom",
        permissoes:["mesas","lancamento"]
    },
    {
        usuario:"lucas",
        senha:"123",
        nome:"Lucas",
        perfil:"Garçom",
        permissoes:["mesas","lancamento"]
    },
    {
        usuario:"ricardo",
        senha:"123",
        nome:"Ricardo",
        perfil:"Bar",
        permissoes:["mesas","lancamento","estoque","saida"]
    }
];

function iniciarLogin(){

    const usuarioLogado =
        JSON.parse(
            localStorage.getItem("usuarioLogado")
        );

    if(usuarioLogado){
        liberarSistema(usuarioLogado);
    }else{
        document.body.classList.add("login-ativo");
    }
}

function liberarSistema(usuario){

    document.body.classList.remove("login-ativo");
    document.body.classList.add("logado");

    document.getElementById("nomeUsuarioLogado").innerText =
        usuario.nome;

    document.getElementById("perfilUsuarioLogado").innerText =
        usuario.perfil;

    document.getElementById("nomeUsuarioSidebar").innerText =
        usuario.nome;

        if(document.getElementById("userbarNome")){
    document.getElementById("userbarNome").innerText = usuario.nome;
 }

        if(document.getElementById("userbarPerfil")){
        document.getElementById("userbarPerfil").innerText = usuario.perfil;
    }

        aplicarPermissoesMenu(usuario);
        if(usuario.perfil === "Garçom"){
        abrirModulo("mesas");
        }else{
         abrirModulo(usuario.permissoes[0]);
        }
}

function usuarioPodeAcessar(modulo){

    const usuarioLogado =
        JSON.parse(
            localStorage.getItem("usuarioLogado")
        );

    if(!usuarioLogado){
        return false;
    }

    return usuarioLogado.permissoes.includes(modulo);
}

/* ==========================================
   PERMISSÕES DO MENU
========================================== */

function aplicarPermissoesMenu(usuario){

    document.querySelectorAll(".menu button").forEach(botao => {

        const onclick =
            botao.getAttribute("onclick");

        if(!onclick) return;

        const modulo =
            onclick
                .replace("abrirModulo('", "")
                .replace("')", "");

        if(!usuario.permissoes.includes(modulo)){
            botao.style.display = "none";
        }else{
            botao.style.display = "block";
        }
    });
}

document.getElementById("formLogin").addEventListener("submit", function(event){

    event.preventDefault();

    const usuarioDigitado =
        document.getElementById("usuarioLogin").value.trim();

    const senhaDigitada =
        document.getElementById("senhaLogin").value.trim();

    const usuarioEncontrado =
    usuarios.find(
        item =>
            item.usuario === usuarioDigitado &&
            item.senha === senhaDigitada
    );

    if(!usuarioEncontrado){
        alert("Usuário ou senha inválidos.");
        return;
    }

    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarioEncontrado)
    );

    liberarSistema(usuarioEncontrado);

    registrarHistorico(
        `Login realizado: ${usuarioEncontrado.nome}`
    );

    salvarDados();
    
});

function logout(){

    const usuarioLogado =
        JSON.parse(
            localStorage.getItem("usuarioLogado")
        );

    if(usuarioLogado){
        registrarHistorico(
            `Logout realizado: ${usuarioLogado.nome}`
        );
        salvarDados();
    }

    localStorage.removeItem("usuarioLogado");

    document.body.classList.remove("logado");
    document.body.classList.add("login-ativo");

    document.getElementById("usuarioLogin").value = "";
    document.getElementById("senhaLogin").value = "";
}
/* =====================================================
   Salvamento automático
===================================================== */

function salvarDados(){
    localStorage.setItem("sf_produtos_v4_auto", JSON.stringify(produtos));
    localStorage.setItem("sf_recebimentos_v4_auto", JSON.stringify(recebimentos));
    localStorage.setItem("sf_saidas_v4_auto", JSON.stringify(saidas));
    localStorage.setItem("sf_historico_v4_auto", JSON.stringify(historico));
    localStorage.setItem("sf_inventarios_v5", JSON.stringify(inventarios));
    localStorage.setItem("sf_fornecedores_v1", JSON.stringify(fornecedores));
    localStorage.setItem("cf_mesas_v8", JSON.stringify(mesas));
    localStorage.setItem("cf_comandas_v8", JSON.stringify(comandas));
    localStorage.setItem("cf_estoque_cozinha_v8", JSON.stringify(estoqueCozinha));
    localStorage.setItem("cf_pagamentos_v1", JSON.stringify(pagamentos));
}

/* =====================================================
   Navegação entre módulos
===================================================== */

function abrirModulo(id){

    if(!usuarioPodeAcessar(id)){
        alert("Acesso negado. Seu perfil não tem permissão para acessar este módulo.");
        return;
    }

    document.querySelectorAll(".modulo").forEach(modulo => {
        modulo.classList.remove("ativo");
    });

    document.getElementById(id).classList.add("ativo");
    atualizarTela();
    if(id === "mesas"){
    preencherUltimaMesaGarcom();
   }
}

/* =====================================================
   Histórico
===================================================== */

function registrarHistorico(acao){
    historico.push({
        acao: acao,
        data: new Date().toLocaleString("pt-BR")
    });
}

/* =====================================================
   Busca de produto
===================================================== */

function buscarProdutoPorCodigo(codigo){
    return produtos.find(produto => produto.codigo === codigo.trim());
}

/* =====================================================
   Sugestão automática de local e endereço
===================================================== */

function sugerirLocal(produto){
    const categoria = produto.categoria.toLowerCase();

    if(categoria.includes("cerveja")){
        return "Geladeira 2";
    }

    if(categoria.includes("água") || categoria.includes("agua")){
        return "Geladeira 3";
    }

    if(categoria.includes("energético") || categoria.includes("energetico")){
        return "Geladeira 3";
    }

    return "Geladeira 1";
}

function sugerirEndereco(produto){
    const categoria = produto.categoria.toLowerCase();

    if(categoria.includes("cerveja")){
        return "G2-A01";
    }

    if(categoria.includes("água") || categoria.includes("agua")){
        return "G3-A01";
    }

    if(categoria.includes("energético") || categoria.includes("energetico")){
        return "G3-B01";
    }

    return "G1-A01";
}

/* =====================================================
   Recebimento automático por fardos
===================================================== */

function buscarProdutoRecebimento(){
    const codigo = document.getElementById("codigoRecebimento").value;
    const produto = buscarProdutoPorCodigo(codigo);

    if(!produto){
        document.getElementById("produtoRecebido").value = "";
        document.getElementById("fornecedorRecebimento").value = "";
        document.getElementById("categoriaRecebimento").value = "";
        document.getElementById("unidadesFardoRecebimento").value = "";
        document.getElementById("totalUnidadesRecebimento").value = "";
        document.getElementById("localSugeridoRecebimento").value = "";
        document.getElementById("enderecoSugeridoRecebimento").value = "";
        return;
    }

    document.getElementById("produtoRecebido").value = produto.nome;
    document.getElementById("fornecedorRecebimento").value = produto.fornecedor;
    document.getElementById("categoriaRecebimento").value = produto.categoria;
    document.getElementById("unidadesFardoRecebimento").value = `${produto.unidadesPorFardo} un por fardo`;
    document.getElementById("localSugeridoRecebimento").value = sugerirLocal(produto);
    document.getElementById("enderecoSugeridoRecebimento").value = sugerirEndereco(produto);

    calcularUnidadesRecebimento();
}

function calcularUnidadesRecebimento(){
    const codigo = document.getElementById("codigoRecebimento").value;
    const produto = buscarProdutoPorCodigo(codigo);
    const fardos = Number(document.getElementById("quantidadeFardos").value);

    if(!produto || !fardos){
        document.getElementById("totalUnidadesRecebimento").value = "";
        return;
    }

    const total = fardos * produto.unidadesPorFardo;
    document.getElementById("totalUnidadesRecebimento").value = `${total} unidades`;
}

document.getElementById("formRecebimento").addEventListener("submit", function(event){
    event.preventDefault();

    const codigo = document.getElementById("codigoRecebimento").value;
    const produto = buscarProdutoPorCodigo(codigo);
    const fardos = Number(document.getElementById("quantidadeFardos").value);

    if(!produto){
        alert("Produto não encontrado. Verifique o código.");
        return;
    }

    if(fardos <= 0){
        alert("Informe uma quantidade válida de fardos.");
        return;
    }

    const unidades = fardos * produto.unidadesPorFardo;

    const recebimento = {
        id: Date.now(),
        codigo: produto.codigo,
        produto: produto.nome,
        categoria: produto.categoria,
        fornecedor: produto.fornecedor,
        fardos: fardos,
        unidadesPorFardo: produto.unidadesPorFardo,
        unidades: unidades,
        notaFiscal: document.getElementById("notaFiscal").value,
        local: sugerirLocal(produto),
        endereco: sugerirEndereco(produto),
        conferente: document.getElementById("conferenteRecebimento").value,
        status: "Conferência",
        data: new Date().toLocaleString("pt-BR")
    };

    recebimentos.push(recebimento);

    registrarHistorico(
        `Recebimento automático: ${produto.codigo} - ${produto.nome} | ${fardos} fardos = ${unidades} unidades`
    );

    salvarDados();
    this.reset();
    abrirModulo("conferencia");
});

/* =====================================================
   Conferência e perdas
===================================================== */

function aprovarRecebimento(id){

    const item = recebimentos.find(recebimento => recebimento.id === id);

    if(!item) return;

    item.status = "Aprovado";

    registrarHistorico(
        `Conferência aprovada: ${item.codigo} - ${item.produto} enviado para armazenamento`
    );

    salvarDados();
    atualizarTela();
}

function enviarParaPerda(id){
    const item = recebimentos.find(recebimento => recebimento.id === id);

    item.status = "Perda";
    item.local = "Local de Perdas";
    item.endereco = "PERDAS-01";

    registrarHistorico(
        `Perda registrada: ${item.codigo} - ${item.produto} | ${item.unidades} unidades`
    );

    salvarDados();
    atualizarTela();
}

/* =====================================================
   Cálculo automático do estoque
===================================================== */

function calcularEstoque(){
    const estoque = {};

    produtos.forEach(produto => {
        estoque[produto.codigo] = {
            codigo: produto.codigo,
            produto: produto.nome,
            categoria: produto.categoria,
            fornecedor: produto.fornecedor,
            unidadesPorFardo: produto.unidadesPorFardo,
            estoqueMinimo: produto.estoqueMinimo,
            entradaFardos: 0,
            entradaUnidades: 0,
            saidaUnidades: 0,
            perdaUnidades: 0,
            saldo: 0,
            local: "-",
            endereco: "-"
        };
    });

    recebimentos.forEach(item => {
        if(item.status === "Armazenado"){
            estoque[item.codigo].entradaFardos += item.fardos;
            estoque[item.codigo].entradaUnidades += item.unidades;
            estoque[item.codigo].local = item.local;
            estoque[item.codigo].endereco = item.endereco;
        }

        if(item.status === "Perda"){
            estoque[item.codigo].perdaUnidades += item.unidades;
        }
    });

    saidas.forEach(item => {
        estoque[item.codigo].saidaUnidades += item.quantidade;
    });

    Object.values(estoque).forEach(item => {
        item.saldo = item.entradaUnidades - item.saidaUnidades - item.perdaUnidades;
    });

    return Object.values(estoque);
}

function obterSaldo(codigo){
    const item = calcularEstoque().find(e => e.codigo === codigo);
    return item ? item.saldo : 0;
}

/* =====================================================
   Saída automática por unidades
===================================================== */

function buscarProdutoSaida(){
    const codigo = document.getElementById("codigoSaida").value;
    const produto = buscarProdutoPorCodigo(codigo);
    const saldo = obterSaldo(codigo);

    if(!produto){
        document.getElementById("produtoSaida").value = "";
        document.getElementById("fornecedorSaida").value = "";
        document.getElementById("saldoAtualSaida").value = "";
        return;
    }

    document.getElementById("produtoSaida").value = produto.nome;
    document.getElementById("fornecedorSaida").value = produto.fornecedor;
    document.getElementById("saldoAtualSaida").value = `${saldo} unidades disponíveis`;
}

document.getElementById("formSaida").addEventListener("submit", function(event){
    event.preventDefault();

    const codigo = document.getElementById("codigoSaida").value;
    const produto = buscarProdutoPorCodigo(codigo);
    const quantidade = Number(document.getElementById("quantidadeSaida").value);
    const saldo = obterSaldo(codigo);

    if(!produto){
        alert("Produto não encontrado.");
        return;
    }

    if(quantidade <= 0){
        alert("Informe uma quantidade válida.");
        return;
    }

    if(quantidade > saldo){
        alert(`Saída bloqueada. Saldo disponível: ${saldo} unidades.`);
        return;
    }

    const saida = {
        id: Date.now(),
        codigo: produto.codigo,
        produto: produto.nome,
        fornecedor: produto.fornecedor,
        quantidade: quantidade,
        motivo: document.getElementById("motivoSaida").value,
        responsavel: document.getElementById("responsavelSaida").value,
        data: new Date().toLocaleString("pt-BR")
    };

    saidas.push(saida);

    registrarHistorico(
        `Saída automática: ${produto.codigo} - ${produto.nome} | ${quantidade} unidades | ${saida.motivo}`
    );

    salvarDados();
    this.reset();
    atualizarTela();
});

/* =====================================================
   Atualização geral da tela
===================================================== */

function atualizarTela(){
    const estoque = calcularEstoque();

    const totalEntradas = estoque.reduce((total, item) => total + item.entradaUnidades, 0);
    const totalSaidas = estoque.reduce((total, item) => total + item.saidaUnidades, 0);
    const totalPerdas = estoque.reduce((total, item) => total + item.perdaUnidades, 0);

    document.getElementById("dashProdutos").innerText = produtos.length;
    document.getElementById("dashEntradas").innerText = totalEntradas;
    document.getElementById("dashSaidas").innerText = totalSaidas;
    document.getElementById("dashPerdas").innerText = totalPerdas;

    listarProdutos();
    listarConferencia();
    listarArmazenamento();
    listarEstoque();
    listarSaidas();
    listarPerdas();
    listarHistorico();
    listarInventarios();
    listarResumoDashboard();
    listarAlertasDashboard();
    listarFinanceiro();
    listarFornecedores();
    listarMesas();
    listarCozinha();
    listarCaixa();
}

/* =====================================================
   Listagem de Produtos
===================================================== */

const produtosMaisPedidos = [
    "103",
    "104",
    "140",
    "180",
    "300",
    "304"
];

function listarProdutosLancamento(){

    const area = document.getElementById("listaProdutosLancamento");
    const campoBusca = document.getElementById("buscarProdutoLancamento");
    const campoTipo = document.getElementById("tipoItemLancamento");

    if(!area || !campoBusca) return;

    const busca = campoBusca.value.trim().toLowerCase();
    const tipo = campoTipo ? campoTipo.value : "todos";

    area.innerHTML = "";

    if(busca === "" && tipo === "todos"){

        area.innerHTML += `
            <div class="painel" style="grid-column:1/-1">
                <h2>⭐ Mais Pedidas</h2>
            </div>
        `;

        produtos
            .filter(produto => produtosMaisPedidos.includes(produto.codigo))
            .forEach(produto => {

                const saldo = obterSaldo(produto.codigo);

                area.innerHTML += `
                    <div class="item">
                        <h3>${produto.nome}</h3>
                        <p><strong>Código:</strong> ${produto.codigo}</p>
                        <p><strong>Categoria:</strong> ${produto.categoria}</p>
                        <p><strong>Estoque:</strong> ${saldo} unidades</p>
                        <p><strong>Valor:</strong> R$ ${(produto.venda || 0).toFixed(2)}</p>

                        <button
                            class="btn-primary"
                            onclick="adicionarProdutoComanda('${produto.codigo}')">
                            Adicionar
                        </button>
                    </div>
                `;
            });

        return;
    }

    const produtosFiltrados = produtos.filter(produto => {

        const codigo = String(produto.codigo || "").toLowerCase();
        const nome = String(produto.nome || "").toLowerCase();
        const categoria = String(produto.categoria || "").toLowerCase();

        const passouBusca =
            codigo.includes(busca) ||
            nome.includes(busca);

        if(!passouBusca) return false;

        if(tipo === "todos") return true;

        if(tipo === "bebida"){
            return (
                categoria === "refrigerante" ||
                categoria === "água" ||
                categoria === "agua" ||
                categoria === "energético" ||
                categoria === "energetico" ||
                categoria === "cerveja"
            );
        }

        if(tipo === "pizza"){
            return categoria === "pizza";
        }

        return true;
    });

    if(produtosFiltrados.length === 0){
        area.innerHTML = `<div class="item">Nenhum produto encontrado.</div>`;
        return;
    }

    produtosFiltrados.forEach(produto => {

        const saldo = obterSaldo(produto.codigo);

        area.innerHTML += `
            <div class="item">
                <h3>${produto.nome}</h3>
                <p><strong>Código:</strong> ${produto.codigo}</p>
                <p><strong>Categoria:</strong> ${produto.categoria}</p>
                <p><strong>Estoque:</strong> ${saldo} unidades</p>
                <p><strong>Valor:</strong> R$ ${(produto.venda || 0).toFixed(2)}</p>

                <button
                    class="btn-primary"
                    onclick="adicionarProdutoComanda('${produto.codigo}')">
                    Adicionar
                </button>
            </div>
        `;
    });
}

function cadastrarProdutoManual(){

    const codigo = document.getElementById("novoCodigoProduto").value.trim();
    const nome = document.getElementById("novoNomeProduto").value.trim();
    const categoria = document.getElementById("novaCategoriaProduto").value.trim();
    const fornecedor = document.getElementById("novoFornecedorProduto").value.trim();

    const unidades = Number(document.getElementById("novasUnidadesFardoProduto").value);
    const estoqueMinimo = Number(document.getElementById("novoEstoqueMinimoProduto").value);
    const custo = Number(document.getElementById("novoCustoProduto").value);
    const venda = Number(document.getElementById("novoVendaProduto").value);

    if(!codigo || !nome){
        alert("Informe pelo menos o código e o nome.");
        return;
    }

    const existe = produtos.some(p => String(p.codigo) === String(codigo));

    if(existe){
        alert("Já existe um produto com esse código.");
        return;
    }

    produtos.push({

        codigo,
        nome,
        categoria,
        fornecedor,

        unidadesPorFardo: unidades || 1,
        estoqueMinimo: estoqueMinimo || 0,

        custo: custo || 0,
        venda: venda || 0,

        controlaEstoque:true

    });

    registrarHistorico(`Produto cadastrado: ${nome}`);

    salvarDados();

    listarProdutos();

    document.getElementById("novoCodigoProduto").value="";
    document.getElementById("novoNomeProduto").value="";
    document.getElementById("novaCategoriaProduto").value="";
    document.getElementById("novoFornecedorProduto").value="";
    document.getElementById("novasUnidadesFardoProduto").value="";
    document.getElementById("novoEstoqueMinimoProduto").value="";
    document.getElementById("novoCustoProduto").value="";
    document.getElementById("novoVendaProduto").value="";

    alert("Produto cadastrado com sucesso!");

}

/* =====================================================
   Listagem de Conferência
===================================================== */

function listarConferencia(){
    const lista = document.getElementById("listaConferencia");
    const itens = recebimentos.filter(item => item.status === "Conferência");

    if(itens.length === 0){
        lista.innerHTML = `<div class="item">Nenhum produto aguardando conferência.</div>`;
        return;
    }

    lista.innerHTML = itens.map(item => `
        <div class="item">
            <h3>${item.codigo} - ${item.produto}</h3>
            <p><strong>Fornecedor:</strong> ${item.fornecedor}</p>
            <p><strong>Nota Fiscal:</strong> ${item.notaFiscal}</p>
            <p><strong>Recebido:</strong> ${item.fardos} fardos x ${item.unidadesPorFardo} = ${item.unidades} unidades</p>
            <p><strong>Destino automático:</strong> ${item.local} / ${item.endereco}</p>
            <p><strong>Conferente:</strong> ${item.conferente}</p>

            <button class="btn btn-ok" onclick="aprovarRecebimento(${item.id})">
                Aprovar
            </button>

            <button class="btn btn-perda" onclick="enviarParaPerda(${item.id})">
                Enviar para Perdas
            </button>
        </div>
    `).join("");
}

/* =====================================================
   Listagem de Armazenamento
===================================================== */

function listarArmazenamento(){

    const lista = document.getElementById("listaArmazenamento");

    if(!lista) return;

    const itens = recebimentos.filter(item => item.status === "Aprovado");

    if(itens.length === 0){
        lista.innerHTML = `<div class="item">Nenhum produto aguardando armazenamento.</div>`;
        return;
    }

    lista.innerHTML = itens.map(item => `
        <div class="item">
            <h3>${item.codigo} - ${item.produto}</h3>
            <p><strong>Quantidade:</strong> ${item.unidades} unidades</p>
            <p><strong>Local sugerido:</strong> ${item.local}</p>
            <p><strong>Endereço sugerido:</strong> ${item.endereco}</p>
            <p><strong>Status:</strong> Aguardando armazenamento</p>

            <button class="btn btn-ok" onclick="confirmarArmazenamento(${item.id})">
                Confirmar Armazenamento
            </button>
        </div>
    `).join("");
}

function confirmarArmazenamento(id){

    const item = recebimentos.find(recebimento => recebimento.id === id);

    if(!item) return;

    item.status = "Armazenado";

    registrarHistorico(
        `Produto armazenado: ${item.codigo} - ${item.produto} | ${item.unidades} unidades | ${item.local} / ${item.endereco}`
    );

    salvarDados();
    atualizarTela();

    alert("Produto armazenado e enviado para o estoque.");
}

/* =====================================================
   Listagem de Estoque
===================================================== */

function listarEstoque(){
    const lista = document.getElementById("listaEstoque");
    const termo = document.getElementById("buscarEstoque")?.value.toLowerCase() || "";

    const estoque = calcularEstoque().filter(item =>
        item.codigo.toLowerCase().includes(termo) ||
        item.produto.toLowerCase().includes(termo) ||
        item.fornecedor.toLowerCase().includes(termo)
    );

    lista.innerHTML = `
        <div class="tabela-container">
            <table class="tabela">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Fornecedor</th>
                        <th>Entrada Fardos</th>
                        <th>Entrada Un</th>
                        <th>Saída Un</th>
                        <th>Perdas Un</th>
                        <th>Saldo Un</th>
                        <th>Local</th>
                        <th>Endereço</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    ${estoque.map(item => {
                        let status = "Normal";
                        let classe = "badge-ok";

                        if(item.saldo <= 0){
                            status = "Sem estoque";
                            classe = "badge-zero";
                        }else if(item.saldo <= item.estoqueMinimo){
                            status = "Estoque baixo";
                            classe = "badge-baixo";
                        }

                        return `
                            <tr>
                                <td>${item.codigo}</td>
                                <td>${item.produto}</td>
                                <td>${item.fornecedor}</td>
                                <td>${item.entradaFardos}</td>
                                <td>${item.entradaUnidades}</td>
                                <td>${item.saidaUnidades}</td>
                                <td>${item.perdaUnidades}</td>
                                <td>${item.saldo}</td>
                                <td>${item.local}</td>
                                <td>${item.endereco}</td>
                                <td class="${classe}">${status}</td>
                            </tr>
                        `;
                    }).join("")}
                </tbody>
            </table>
        </div>
    `;
}

/* =====================================================
   Listagem de Saídas
===================================================== */

function listarSaidas(){
    const lista = document.getElementById("listaSaidas");

    if(saidas.length === 0){
        lista.innerHTML = `<div class="item">Nenhuma saída registrada.</div>`;
        return;
    }

    lista.innerHTML = saidas.slice().reverse().map(item => `
        <div class="item">
            <h3>${item.codigo} - ${item.produto}</h3>
            <p><strong>Quantidade:</strong> ${item.quantidade} unidades</p>
            <p><strong>Motivo:</strong> ${item.motivo}</p>
            <p><strong>Responsável:</strong> ${item.responsavel}</p>
            <p><strong>Data:</strong> ${item.data}</p>
        </div>
    `).join("");
}

/* =====================================================
   Listagem de Perdas
===================================================== */

function listarPerdas(){
    const lista = document.getElementById("listaPerdas");
    const perdas = recebimentos.filter(item => item.status === "Perda");

    if(perdas.length === 0){
        lista.innerHTML = `<div class="item">Nenhuma perda registrada.</div>`;
        return;
    }

    lista.innerHTML = perdas.map(item => `
        <div class="item">
            <h3>${item.codigo} - ${item.produto}</h3>
            <p><strong>Quantidade perdida:</strong> ${item.unidades} unidades</p>
            <p><strong>Nota Fiscal:</strong> ${item.notaFiscal}</p>
            <p><strong>Endereço:</strong> ${item.endereco}</p>
        </div>
    `).join("");
}

/* =====================================================
   Histórico
===================================================== */

function listarHistorico(){
    const lista = document.getElementById("listaHistorico");

    if(historico.length === 0){
        lista.innerHTML = `<div class="item">Nenhuma movimentação registrada.</div>`;
        return;
    }

    lista.innerHTML = historico.slice().reverse().map(item => `
        <div class="item">
            <p>${item.acao}</p>
            <small>${item.data}</small>
        </div>
    `).join("");
}

/* =====================================================
   Dashboard
===================================================== */

function listarResumoDashboard(){
    const resumo = document.getElementById("resumoDashboard");
    const estoque = calcularEstoque().filter(item => item.saldo > 0).slice(0, 5);

    if(estoque.length === 0){
        resumo.innerHTML = `<p>Nenhum produto em estoque ainda.</p>`;
        return;
    }

    resumo.innerHTML = `
        <div class="tabela-container">
            <table class="tabela">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Saldo</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    ${estoque.map(item => `
                        <tr>
                            <td>${item.codigo}</td>
                            <td>${item.produto}</td>
                            <td>${item.saldo}</td>
                            <td class="${item.saldo <= item.estoqueMinimo ? 'badge-baixo' : 'badge-ok'}">
                                ${item.saldo <= item.estoqueMinimo ? 'Baixo' : 'Normal'}
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function listarAlertasDashboard(){
    const alerta = document.getElementById("alertasDashboard");
    const estoque = calcularEstoque();

    const baixos = estoque.filter(item => item.saldo > 0 && item.saldo <= item.estoqueMinimo);
    const zerados = estoque.filter(item => item.saldo <= 0);
    const pendentes = recebimentos.filter(item => item.status === "Conferência");

    alerta.innerHTML = `
        <div class="alert-card orange">
            <strong>${baixos.length} produtos com estoque baixo</strong>
            <p>Itens abaixo ou próximos do estoque mínimo.</p>
        </div>

        <div class="alert-card red">
            <strong>${zerados.length} produtos sem estoque</strong>
            <p>Produtos que precisam de reposição.</p>
        </div>

        <div class="alert-card blue-alert">
            <strong>${pendentes.length} recebimentos pendentes</strong>
            <p>Aguardando aprovação na conferência.</p>
        </div>
    `;
}

/* =====================================================
   INVENTÁRIO
===================================================== */

function buscarProdutoInventario(){

    const codigo =
        document.getElementById("codigoInventario").value;

    const produto =
        buscarProdutoPorCodigo(codigo);

    const saldo =
        obterSaldo(codigo);

    if(!produto){

        document.getElementById(
            "produtoInventario"
        ).value = "";

        document.getElementById(
            "saldoSistemaInventario"
        ).value = "";

        return;
    }

    document.getElementById(
        "produtoInventario"
    ).value = produto.nome;

    document.getElementById(
        "saldoSistemaInventario"
    ).value = saldo;
}

function calcularDiferencaInventario(){

    const saldo =
        Number(
            document.getElementById(
                "saldoSistemaInventario"
            ).value
        );

    const contagem =
        Number(
            document.getElementById(
                "contagemFisica"
            ).value
        );

    document.getElementById(
        "diferencaInventario"
    ).value = contagem - saldo;
}

document.getElementById(
    "formInventario"
)?.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const codigo =
            document.getElementById(
                "codigoInventario"
            ).value;

        const produto =
            buscarProdutoPorCodigo(codigo);

        const saldoSistema =
            obterSaldo(codigo);

        const contagemFisica =
            Number(
                document.getElementById(
                    "contagemFisica"
                ).value
            );

        const diferenca =
            contagemFisica - saldoSistema;

        const inventario = {

            id: Date.now(),

            codigo: produto.codigo,

            produto: produto.nome,

            saldoSistema,

            contagemFisica,

            diferenca,

            responsavel:
                document.getElementById(
                    "responsavelInventario"
                ).value,

            data:
                new Date().toLocaleString(
                    "pt-BR"
                )
        };

        inventarios.push(inventario);

        registrarHistorico(
            `Inventário: ${produto.nome} | Sistema ${saldoSistema} | Físico ${contagemFisica} | Diferença ${diferenca}`
        );

        salvarDados();

        alert(
            "Inventário registrado com sucesso."
        );

        this.reset();

        atualizarTela();
    }
);

function listarInventarios(){

    const lista =
        document.getElementById(
            "listaInventarios"
        );

    if(!lista) return;

    if(inventarios.length === 0){

        lista.innerHTML =
            `<div class="item">
                Nenhum inventário realizado.
            </div>`;

        return;
    }

    lista.innerHTML =
        inventarios
        .slice()
        .reverse()
        .map(item => `

        <div class="item">

            <h3>
                ${item.codigo}
                -
                ${item.produto}
            </h3>

            <p>
                Sistema:
                ${item.saldoSistema}
            </p>

            <p>
                Físico:
                ${item.contagemFisica}
            </p>

            <p>
                Diferença:
                ${item.diferenca}
            </p>

            <p>
                Responsável:
                ${item.responsavel}
            </p>

            <p>
                Data:
                ${item.data}
            </p>

        </div>

        `)
        .join("");
}

function listarFinanceiro(){

    const estoque = calcularEstoque();

    let custoTotal = 0;
    let receitaTotal = 0;

    const produtosFinanceiros = estoque.map(item => {

        const produto =
            produtos.find(
                p => p.codigo === item.codigo
            );

        const custoUnitario =
            produto?.custo || 0;

        const vendaUnitaria =
            produto?.venda || 0;

        const custoEstoque =
            item.saldo * custoUnitario;

        const receitaPotencial =
            item.saldo * vendaUnitaria;

        const lucroPotencial =
            receitaPotencial - custoEstoque;

        custoTotal += custoEstoque;
        receitaTotal += receitaPotencial;

        return {
            codigo:item.codigo,
            produto:item.produto,
            saldo:item.saldo,
            custoUnitario,
            vendaUnitaria,
            custoEstoque,
            receitaPotencial,
            lucroPotencial
        };

    }).sort((a,b) => b.custoEstoque - a.custoEstoque);

    const lucro =
        receitaTotal - custoTotal;

    const semEstoque =
        estoque.filter(
            item => item.saldo <= 0
        ).length;

    if(document.getElementById("finCusto")){
        document.getElementById("finCusto").innerText =
            custoTotal.toLocaleString("pt-BR", {
                style:"currency",
                currency:"BRL"
            });
    }

    if(document.getElementById("finReceita")){
        document.getElementById("finReceita").innerText =
            receitaTotal.toLocaleString("pt-BR", {
                style:"currency",
                currency:"BRL"
            });
    }

    if(document.getElementById("finLucro")){
        document.getElementById("finLucro").innerText =
            lucro.toLocaleString("pt-BR", {
                style:"currency",
                currency:"BRL"
            });
    }

    if(document.getElementById("finSemEstoque")){
        document.getElementById("finSemEstoque").innerText =
            semEstoque;
    }

    const lista =
        document.getElementById("listaFinanceiro");

    if(!lista) return;

    if(produtosFinanceiros.length === 0){
        lista.innerHTML =
            `<div class="item">Nenhum dado financeiro disponível.</div>`;
        return;
    }

    lista.innerHTML = `
        <div class="tabela-container">
            <table class="tabela">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Saldo</th>
                        <th>Custo Unit.</th>
                        <th>Venda Unit.</th>
                        <th>Custo Estoque</th>
                        <th>Receita Potencial</th>
                        <th>Lucro Estimado</th>
                    </tr>
                </thead>

                <tbody>
                    ${produtosFinanceiros.map(item => `
                        <tr>
                            <td>${item.codigo}</td>
                            <td>${item.produto}</td>
                            <td>${item.saldo}</td>
                            <td>${item.custoUnitario.toLocaleString("pt-BR", {
                                style:"currency",
                                currency:"BRL"
                            })}</td>
                            <td>${item.vendaUnitaria.toLocaleString("pt-BR", {
                                style:"currency",
                                currency:"BRL"
                            })}</td>
                            <td>${item.custoEstoque.toLocaleString("pt-BR", {
                                style:"currency",
                                currency:"BRL"
                            })}</td>
                            <td>${item.receitaPotencial.toLocaleString("pt-BR", {
                                style:"currency",
                                currency:"BRL"
                            })}</td>
                            <td>${item.lucroPotencial.toLocaleString("pt-BR", {
                                style:"currency",
                                currency:"BRL"
                            })}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

/* =====================================================
   FORNECEDORES
===================================================== */

function listarFornecedores(){

    const lista =
        document.getElementById(
            "listaFornecedores"
        );

    if(!lista) return;

    const busca =
        document.getElementById(
            "buscarFornecedor"
        )?.value
        ?.toLowerCase() || "";

    const dados =
        fornecedores.filter(item =>

            item.razaoSocial
                .toLowerCase()
                .includes(busca)

            ||

            item.nomeFantasia
                .toLowerCase()
                .includes(busca)

            ||

            item.cnpj
                .toLowerCase()
                .includes(busca)

            ||

            item.contato
                .toLowerCase()
                .includes(busca)
        );

    lista.innerHTML =
    dados.map(item => `

    <div class="item">

        <h3>${item.nomeFantasia}</h3>

        <p>
            <strong>Razão Social:</strong>
            ${item.razaoSocial}
        </p>

        <p>
            <strong>CNPJ:</strong>
            ${item.cnpj}
        </p>

        <p>
            <strong>Telefone:</strong>
            ${item.telefone}
        </p>

        <p>
            <strong>E-mail:</strong>
            ${item.email}
        </p>

        <p>
            <strong>Contato:</strong>
            ${item.contato}
        </p>

        <button onclick="editarFornecedor(${item.id})">
            ✏️ Editar
        </button>

        <button onclick="excluirFornecedor(${item.id})">
            🗑️ Excluir
        </button>
       
    </div>

    `).join("");
    }

document.getElementById("formFornecedor")?.addEventListener("submit", function(event){

    event.preventDefault();

    const idEditando =
        document.getElementById("fornecedorEditandoId").value;

    const fornecedor = {
        id: idEditando ? Number(idEditando) : Date.now(),
        razaoSocial: document.getElementById("razaoSocialFornecedor").value,
        nomeFantasia: document.getElementById("nomeFantasiaFornecedor").value,
        cnpj: document.getElementById("cnpjFornecedor").value,
        telefone: document.getElementById("telefoneFornecedor").value,
        email: document.getElementById("emailFornecedor").value,
        contato: document.getElementById("contatoFornecedor").value
    };

    if(idEditando){

        const index =
            fornecedores.findIndex(
                item => item.id === Number(idEditando)
            );

        fornecedores[index] = fornecedor;

        registrarHistorico(
            `Fornecedor editado: ${fornecedor.nomeFantasia}`
        );

        document.getElementById("btnSalvarFornecedor").innerText =
            "Salvar Fornecedor";

        document.getElementById("fornecedorEditandoId").value = "";

    }else{

        fornecedores.push(fornecedor);

        registrarHistorico(
            `Fornecedor cadastrado: ${fornecedor.nomeFantasia}`
        );
    }

    salvarDados();
    this.reset();
    atualizarTela();
});

function editarFornecedor(id){

    const fornecedor =
        fornecedores.find(
            item => item.id === id
        );

    document.getElementById("fornecedorEditandoId").value =
        fornecedor.id;

    document.getElementById("razaoSocialFornecedor").value =
        fornecedor.razaoSocial;

    document.getElementById("nomeFantasiaFornecedor").value =
        fornecedor.nomeFantasia;

    document.getElementById("cnpjFornecedor").value =
        fornecedor.cnpj;

    document.getElementById("telefoneFornecedor").value =
        fornecedor.telefone;

    document.getElementById("emailFornecedor").value =
        fornecedor.email;

    document.getElementById("contatoFornecedor").value =
        fornecedor.contato;

    document.getElementById("btnSalvarFornecedor").innerText =
        "Atualizar Fornecedor";

    abrirModulo("fornecedores");
}

function excluirFornecedor(id){

    const fornecedor =
        fornecedores.find(
            item => item.id === id
        );

    if(!confirm(`Deseja excluir o fornecedor ${fornecedor.nomeFantasia}?`)){
        return;
    }

    fornecedores =
        fornecedores.filter(
            item => item.id !== id
        );

    registrarHistorico(
        `Fornecedor excluído: ${fornecedor.nomeFantasia}`
    );

    salvarDados();
    atualizarTela();
}

/* =====================================================
   MESAS
===================================================== */

function abrirComandaMesa(){

    const mesa = document.getElementById("numeroMesa").value;
    const comanda = document.getElementById("numeroComanda").value;
    const tipo = document.getElementById("tipoAtendimento").value;
    const garcom = document.getElementById("responsavelMesa").value;

    if(!mesa || !comanda){
        alert("Informe mesa e comanda.");
        return;
    }

    const novaMesa = {

        id:Date.now(),

        mesa,

        comanda,

        tipo,

        garcom,

        status:"ABERTA",

        data:new Date().toLocaleString(),

        total:0
    };

    mesas.push(novaMesa);

    salvarDados();

    listarMesas();

    alert("Comanda aberta com sucesso.");
}

function listarMesas(){

    const area = document.getElementById("listaMesas");

    if(!area) return;

    const usuarioLogado =
        JSON.parse(localStorage.getItem("usuarioLogado"));

    if(usuarioLogado?.perfil === "Garçom"){
        area.innerHTML = "";
        return;
    }

    area.innerHTML = "";

    const abertas =
        mesas.filter(mesa => mesa.status === "ABERTA");

    if(abertas.length === 0){
        area.innerHTML =
            `<div class="item">Nenhuma comanda aberta.</div>`;
        return;
    }

    abertas.forEach(mesa => {

        area.innerHTML += `
            <div class="mesa-card">

                <div class="mesa-topo">
                    <h2>🍽 Mesa ${mesa.mesa || "Sem mesa"}</h2>
                    <span class="mesa-status">${mesa.status}</span>
                </div>

                <div class="mesa-info">
                    <p>📋 Comanda: ${mesa.comanda}</p>
                    <p>👨 Garçom: ${mesa.garcom || "Não vinculado"}</p>
                    <p>💰 Total: R$ ${(mesa.total || 0).toFixed(2)}</p>
                </div>

                <div class="mesa-botoes">
                    <button
                        class="btn-primary"
                        onclick="abrirTelaComanda(${mesa.id})">
                        Lançar Item
                    </button>
                </div>

            </div>
        `;
    });
}

/* =====================================================
   ESTOQUE COZINHA
===================================================== */

function cadastrarInsumoCozinha(){

    const nome =
        document.getElementById("nomeInsumoCozinha").value.trim();

    const categoria =
        document.getElementById("categoriaInsumoCozinha").value.trim();

    const quantidade =
        Number(document.getElementById("quantidadeInsumoCozinha").value);

    const unidade =
        document.getElementById("unidadeInsumoCozinha").value.trim();

    const local =
        document.getElementById("localInsumoCozinha").value.trim();

    if(!nome || !quantidade || !unidade){
        alert("Informe nome, quantidade e unidade do insumo.");
        return;
    }

    const insumo = {
        id:Date.now(),
        nome,
        categoria,
        quantidade,
        unidade,
        local
    };

    estoqueCozinha.push(insumo);

    salvarDados();
    listarCozinha();

    document.getElementById("nomeInsumoCozinha").value = "";
    document.getElementById("categoriaInsumoCozinha").value = "";
    document.getElementById("quantidadeInsumoCozinha").value = "";
    document.getElementById("unidadeInsumoCozinha").value = "";
    document.getElementById("localInsumoCozinha").value = "";
}

function listarCozinha(){

    const area =
        document.getElementById("listaCozinha");

    if(!area) return;

    area.innerHTML = "";

    estoqueCozinha.forEach(item => {

        area.innerHTML += `
            <div class="item">
                <h3>${item.nome}</h3>

                <p>
                    <strong>Categoria:</strong>
                    ${item.categoria || "Não informado"}
                </p>

                <p>
                    <strong>Quantidade:</strong>
                    ${item.quantidade} ${item.unidade}
                </p>

                <p>
                    <strong>Local:</strong>
                    ${item.local || "Não informado"}
                </p>

                <button class="btn btn-excluir" onclick="excluirInsumoCozinha(${item.id})">
                    Excluir
                </button>
            </div>
        `;
    });
}

function excluirInsumoCozinha(id){

    if(!confirm("Deseja excluir este insumo da cozinha?")){
        return;
    }

    estoqueCozinha =
        estoqueCozinha.filter(
            item => item.id !== id
        );

    salvarDados();
    listarCozinha();
}

/* =====================================================
   COMANDAS / LANÇAMENTO DE ITENS
===================================================== */

function abrirTelaComanda(idMesa){

    const mesa =
        mesas.find(m => m.id === idMesa);

    if(!mesa){
        alert("Mesa não encontrada.");
        return;
    }

    document.getElementById("mesaLancamentoId").value =
        mesa.id;

    document.getElementById("tituloComandaLancamento").innerHTML =
        `Mesa ${mesa.mesa} - Comanda ${mesa.comanda}`;

    abrirModulo("lancamento");

    listarProdutosLancamento();
}

function adicionarProdutoComanda(codigo){

    const idMesa =
        Number(document.getElementById("mesaLancamentoId").value);

    const mesa =
        mesas.find(m => m.id === idMesa);

    if(!mesa){
        alert("Mesa não encontrada.");
        return;
    }

    const produto =
        produtos.find(p => p.codigo === codigo);

    if(!produto){
        alert("Produto não encontrado.");
        return;
    }

    const usuarioLogado =
        JSON.parse(localStorage.getItem("usuarioLogado"));

    const categoria =
        String(produto.categoria || "").toLowerCase();

    const ehBebida =
        categoria === "refrigerante" ||
        categoria === "água" ||
        categoria === "agua" ||
        categoria === "energético" ||
        categoria === "energetico" ||
        categoria === "cerveja" ||
        categoria === "sucos" ||
        categoria === "soda italiana" ||
        categoria === "bebidas quentes" ||
        categoria === "drinks" ||
        categoria === "caipirinhas" ||
        categoria === "vinhos";

    const ehPizza =
        categoria.includes("pizza");

    const ehRodizio =
        categoria.includes("rodizio") ||
        categoria.includes("rodízio");

    if(usuarioLogado?.perfil === "Garçom" && ehRodizio){
        alert("Garçom não pode lançar rodízio. Essa função é do caixa.");
        return;
    }

    if(usuarioLogado?.perfil === "Garçom" && !ehBebida && !ehPizza){
        alert("Garçom só pode lançar bebidas, drinks ou pizza à la carte.");
        return;
    }

    const quantidade =
        Number(prompt(`Quantidade de ${produto.nome}:`));

    if(!quantidade || quantidade <= 0){
        alert("Quantidade inválida.");
        return;
    }

    let observacao = "";

    if(ehBebida){

        const copos =
            prompt("Quantos copos? Ex: 1, 2, 3 ou nenhum");

        const complemento =
            prompt(
                "Como servir?\n\n" +
                "1 - Sem gelo/limão/laranja\n" +
                "2 - Com gelo\n" +
                "3 - Limão e gelo\n" +
                "4 - Laranja e gelo\n" +
                "5 - Só limão\n" +
                "6 - Só laranja\n" +
                "7 - Limão espremido\n" +
                "8 - Laranja espremida"
            );

        let textoComplemento = "";

        switch(complemento){
            case "1":
                textoComplemento = "Sem gelo, limão ou laranja";
            break;

            case "2":
                textoComplemento = "Com gelo";
            break;

            case "3":
                textoComplemento = "Com limão e gelo";
            break;

            case "4":
                textoComplemento = "Com laranja e gelo";
            break;

            case "5":
                textoComplemento = "Só limão";
            break;

            case "6":
                textoComplemento = "Só laranja";
            break;

            case "7":
                textoComplemento = "Limão espremido";
            break;

            case "8":
                textoComplemento = "Laranja espremida";
            break;

            default:
                textoComplemento = "Sem observação";
        }

        observacao =
            `Copos: ${copos || "não informado"} | ${textoComplemento}`;
    }

    const controlaEstoque =
        produto.controlaEstoque !== false;

    if(controlaEstoque){

        const saldo =
            obterSaldo(produto.codigo);

        if(quantidade > saldo){
            alert(`Estoque insuficiente. Saldo atual: ${saldo}`);
            return;
        }
    }

    const totalItem =
        quantidade * (produto.venda || 0);

    if(!mesa.itens){
        mesa.itens = [];
    }

    mesa.itens.push({
        codigo:produto.codigo,
        produto:produto.nome,
        categoria:produto.categoria,
        quantidade,
        valorUnitario:produto.venda || 0,
        total:totalItem,
        tipo:ehPizza ? "pizza" : "bebida",
        observacao
    });

    mesa.total =
        (mesa.total || 0) + totalItem;

    if(controlaEstoque){

        saidas.push({
            id:Date.now(),
            codigo:produto.codigo,
            produto:produto.nome,
            fornecedor:produto.fornecedor,
            quantidade,
            motivo:"Venda Comanda",
            responsavel:mesa.garcom || usuarioLogado?.nome || "Garçom",
            observacao,
            data:new Date().toLocaleString("pt-BR")
        });
    }

    registrarHistorico(
        `Comanda ${mesa.comanda}: ${quantidade}x ${produto.nome} lançado por ${usuarioLogado?.nome || "Usuário"} ${observacao ? "| " + observacao : ""}`
    );

    salvarDados();
    atualizarTela();

    alert("Produto lançado na comanda.");
}

/* =====================================================
   CAIXA
===================================================== */

function listarCaixa(){

    const area = document.getElementById("listaCaixa");

    if(!area) return;

    area.innerHTML = "";

    const abertas = mesas.filter(
        mesa => mesa.status === "ABERTA"
    );

    if(abertas.length === 0){
        area.innerHTML =
            `<div class="item">Nenhuma comanda aberta.</div>`;
        return;
    }

    abertas.forEach(mesa => {

        const itens = mesa.itens || [];

        area.innerHTML += `

        <div class="mesa-card">

            <div class="mesa-topo">
                <h2>💰 Comanda ${mesa.comanda}</h2>
                <span class="mesa-status">${mesa.status}</span>
            </div>

            <div class="mesa-info">
                <p>🪑 Mesa: ${mesa.mesa || "Ainda não vinculada"}</p>
                <p>👨 Garçom: ${mesa.garcom || "Ainda não vinculado"}</p>
                <p>🍽 Tipo: ${mesa.tipo || "Sem Rodízio"}</p>
            </div>

            <hr>

            <h4>Itens da comanda</h4>

           ${
              itens.length === 0
              ? "<p>Nenhum item lançado.</p>"
              : itens.map(item => `
              <p>
              ${item.quantidade}x ${item.produto}
              - R$ ${item.total.toFixed(2)}
              ${item.observacao ? `<br><small>📝 ${item.observacao}</small>` : ""}
              </p>
             `).join("")
           }

            <h3>Total: R$ ${(mesa.total || 0).toFixed(2)}</h3>

            <div class="mesa-botoes">

                <button
                    class="btn-primary"
                    onclick="alterarRodizioComanda(${mesa.id}, 'Rodízio Segunda a Quinta', 69.99)">
                    Rodízio Segunda a Quinta
                </button>

                <button
                    class="btn-primary"
                    onclick="alterarRodizioComanda(${mesa.id}, 'Rodízio Sexta e Sábado', 74.99)">
                    Rodízio Sexta e Sábado
                </button>

                <button
                    class="btn-primary"
                    onclick="alterarRodizioComanda(${mesa.id}, 'Meio Rodízio', 59.99)">
                    Meio Rodízio Criança
                </button>

                <button
                    class="btn btn-excluir"
                    onclick="removerRodizioComanda(${mesa.id})">
                    Remover Rodízio
                </button>

                <button
                    class="btn-primary"
                    onclick="abrirTelaComanda(${mesa.id})">
                    Lançar Item
                </button>

                <button
                    class="btn-primary"
                    onclick="fecharConta(${mesa.id})">
                    Fechar Conta
                </button>

            </div>

        </div>

        `;
    });
}

function adicionarRodizio(idMesa, nome, valor){

    const mesa =
        mesas.find(m => m.id === idMesa);

    if(!mesa){
        alert("Mesa não encontrada.");
        return;
    }

    if(!mesa.itens){
        mesa.itens = [];
    }

    mesa.itens.push({
        codigo:"RODIZIO",
        produto:nome,
        quantidade:1,
        valorUnitario:valor,
        total:valor,
        tipo:"rodizio"
    });

    mesa.total =
        (mesa.total || 0) + valor;

    registrarHistorico(
        `${nome} lançado na Mesa ${mesa.mesa} / Comanda ${mesa.comanda}`
    );

    salvarDados();
    atualizarTela();

    alert(`${nome} lançado com sucesso.`);
}

function fecharConta(id){

    const mesa = mesas.find(item => item.id === id);

    if(!mesa){
        alert("Comanda não encontrada.");
        return;
    }

    if(mesa.status === "FECHADA"){
        alert("Essa comanda já está fechada.");
        return;
    }

    const total = mesa.total || 0;

    const formaPagamento = prompt(
        `Total da comanda: R$ ${total.toFixed(2)}\n\n` +
        "Forma de pagamento:\n" +
        "1 - Dinheiro\n" +
        "2 - Pix\n" +
        "3 - Débito\n" +
        "4 - Crédito\n" +
        "5 - Vale/Refeição\n" +
        "6 - Dividido"
    );

    let forma = "";

    switch(formaPagamento){
        case "1":
            forma = "Dinheiro";
        break;

        case "2":
            forma = "Pix";
        break;

        case "3":
            forma = "Débito";
        break;

        case "4":
            forma = "Crédito";
        break;

        case "5":
            forma = "Vale/Refeição";
        break;

        case "6":
            forma = "Dividido";
        break;

        default:
            alert("Forma de pagamento inválida.");
            return;
    }

    let observacao = "";

    if(forma === "Dividido"){
        observacao = prompt(
            "Informe como foi dividido. Ex: R$ 100 Pix + R$ 50 Crédito"
        ) || "";
    }

    pagamentos.push({
        id:Date.now(),
        comanda:mesa.comanda,
        mesa:mesa.mesa || "Sem mesa",
        garcom:mesa.garcom || "Não vinculado",
        total,
        forma,
        observacao,
        data:new Date().toLocaleString("pt-BR")
    });

    mesa.status = "FECHADA";
    mesa.dataFechamento = new Date().toLocaleString("pt-BR");
    mesa.formaPagamento = forma;
    mesa.observacaoPagamento = observacao;

    registrarHistorico(
        `Comanda ${mesa.comanda} fechada | Total R$ ${total.toFixed(2)} | Pagamento: ${forma}`
    );

    salvarDados();
    atualizarTela();

    alert("Conta fechada com sucesso.");
}

function abrirComandaCaixa(){

    const numeroComanda =
        document.getElementById("numeroComandaCaixa").value;

    const tipoRodizio =
        document.getElementById("tipoRodizioCaixa").value;

    if(!numeroComanda){
        alert("Informe o número da comanda.");
        return;
    }

    const comandaExiste =
        mesas.find(
            item =>
                item.comanda == numeroComanda &&
                item.status === "ABERTA"
        );

    if(comandaExiste){
        alert("Essa comanda já está aberta.");
        return;
    }

    let nomeRodizio = "";
    let valorRodizio = 0;

    switch(tipoRodizio){

        case "semana":
            nomeRodizio = "Rodízio Segunda a Quinta";
            valorRodizio = 69.99;
        break;

        case "fimSemana":
            nomeRodizio = "Rodízio Sexta e Sábado";
            valorRodizio = 74.99;
        break;

        case "meio":
            nomeRodizio = "Meio Rodízio";
            valorRodizio = 59.99;
        break;

        case "semRodizio":
            nomeRodizio = "Sem Rodízio";
            valorRodizio = 0;
        break;
    }

    const itens = [];

    if(tipoRodizio !== "semRodizio"){

        itens.push({
            codigo:"RODIZIO",
            produto:nomeRodizio,
            quantidade:1,
            valorUnitario:valorRodizio,
            total:valorRodizio,
            tipo:"rodizio"
        });

    }

    const novaComanda = {

        id:Date.now(),

        mesa:null,

        comanda:numeroComanda,

        tipo:nomeRodizio,

        garcom:null,

        status:"ABERTA",

        data:new Date().toLocaleString("pt-BR"),

        itens:itens,

        total:valorRodizio

    };

    mesas.push(novaComanda);

    registrarHistorico(
        `Comanda ${numeroComanda} aberta no caixa (${nomeRodizio})`
    );

    salvarDados();
    atualizarTela();

    document.getElementById("numeroComandaCaixa").value="";

    alert("Comanda aberta com sucesso.");
}

function vincularMesaComanda(){

    const usuarioLogado =
        JSON.parse(localStorage.getItem("usuarioLogado"));

    const numeroComanda =
        document.getElementById("buscarComandaGarcom").value.trim();

    const mesaInformada =
        document.getElementById("mesaGarcom").value.trim();

    if(!numeroComanda || !mesaInformada){
        alert("Informe comanda e mesa.");
        return;
    }

    const comanda =
        mesas.find(
            item =>
                String(item.comanda) === String(numeroComanda) &&
                item.status === "ABERTA"
        );

    if(!comanda){
        alert("Comanda não encontrada. Ela precisa ser aberta pelo caixa.");
        return;
    }

    comanda.mesa = mesaInformada;
    comanda.garcom = usuarioLogado?.nome || "Garçom";

    localStorage.setItem("ultimaMesaGarcom", mesaInformada);

    registrarHistorico(
        `Comanda ${numeroComanda} vinculada à Mesa ${mesaInformada} por ${comanda.garcom}`
    );

    salvarDados();
    atualizarTela();

    document.getElementById("buscarComandaGarcom").value = "";
    document.getElementById("mesaGarcom").value = mesaInformada;

    abrirTelaComanda(comanda.id);
}

function listarProdutos(){

    const lista = document.getElementById("listaProdutos");

    if(!lista) return;

    const busca =
        document.getElementById("buscarProduto")
        ?.value
        ?.toLowerCase() || "";

    const dados = produtos.filter(produto => {
        return (
            String(produto.codigo).toLowerCase().includes(busca) ||
            String(produto.nome).toLowerCase().includes(busca) ||
            String(produto.fornecedor).toLowerCase().includes(busca) ||
            String(produto.categoria).toLowerCase().includes(busca)
        );
    });

    lista.innerHTML = dados.map(produto => `
        <div class="item">
            <h3>${produto.codigo} - ${produto.nome}</h3>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <p><strong>Fornecedor:</strong> ${produto.fornecedor}</p>
            <p><strong>Unidades por fardo:</strong> ${produto.unidadesPorFardo}</p>
            <p><strong>Estoque mínimo:</strong> ${produto.estoqueMinimo}</p>
            <p><strong>Custo:</strong> R$ ${(produto.custo || 0).toFixed(2)}</p>
            <p><strong>Venda:</strong> R$ ${(produto.venda || 0).toFixed(2)}</p>
        </div>
    `).join("");
}

function alterarRodizioComanda(idMesa, nomeRodizio, valorRodizio){

    const mesa = mesas.find(m => m.id === idMesa);

    if(!mesa){
        alert("Comanda não encontrada.");
        return;
    }

    if(!mesa.itens){
        mesa.itens = [];
    }

    const rodizioAtual =
        mesa.itens.find(item => item.tipo === "rodizio");

    if(rodizioAtual){
        mesa.total -= rodizioAtual.total;

        rodizioAtual.produto = nomeRodizio;
        rodizioAtual.valorUnitario = valorRodizio;
        rodizioAtual.total = valorRodizio;
        rodizioAtual.quantidade = 1;
    }else{
        mesa.itens.push({
            codigo:"RODIZIO",
            produto:nomeRodizio,
            quantidade:1,
            valorUnitario:valorRodizio,
            total:valorRodizio,
            tipo:"rodizio"
        });
    }

    mesa.tipo = nomeRodizio;
    mesa.total = (mesa.total || 0) + valorRodizio;

    registrarHistorico(
        `${nomeRodizio} definido na Comanda ${mesa.comanda}`
    );

    salvarDados();
    atualizarTela();

    alert("Rodízio atualizado com sucesso.");
}

function removerRodizioComanda(idMesa){

    const mesa = mesas.find(m => m.id === idMesa);

    if(!mesa){
        alert("Comanda não encontrada.");
        return;
    }

    if(!mesa.itens){
        mesa.itens = [];
    }

    const rodizio =
        mesa.itens.find(item => item.tipo === "rodizio");

    if(!rodizio){
        alert("Esta comanda não possui rodízio lançado.");
        return;
    }

    mesa.total -= rodizio.total;

    mesa.itens =
        mesa.itens.filter(item => item.tipo !== "rodizio");

    mesa.tipo = "Sem Rodízio";

    registrarHistorico(
        `Rodízio removido da Comanda ${mesa.comanda}`
    );

    salvarDados();
    atualizarTela();

    alert("Rodízio removido com sucesso.");
}

function preencherUltimaMesaGarcom(){

    const campoMesa =
        document.getElementById("mesaGarcom");

    if(!campoMesa) return;

    campoMesa.value =
        localStorage.getItem("ultimaMesaGarcom") || "";
}

/* =====================================================
   Inicialização
===================================================== */

salvarDados();
atualizarTela();
iniciarLogin();