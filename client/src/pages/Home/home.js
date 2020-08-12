import React from 'react';
import CardItem from '../../components/CardItem/CardItem';
import './Styles.scss';

const Home = () => {
  const items = {
    categories: ['MLA1055'],
    items: [
      {
        id: 'MLA852110773',
        title: 'iPhone 11 Pro Max 512 Gb Verde Medianoche 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 321600,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_691416-MLA32445302923_102019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA830476825',
        title: 'iPhone 7 Plus 32 Gb Plata 3 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 139999,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_782517-MLA31003118607_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA830187583',
        title: 'iPhone XS Max 256 Gb Plata 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 269999,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_792890-MLA31002678122_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA826987238',
        title: 'iPhone XS Max 512 Gb Gris Espacial 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 289999,
          decimals: 0,
        },
        picture:
          'http://mla-s1-p.mlstatic.com/658793-MLA31002678125_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA850384921',
        title: 'iPhone 11 64 Gb Morado 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 169733,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_609673-MLA32445402656_102019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA851913726',
        title: 'iPhone 11 128 Gb Amarillo 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 182240,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_751293-MLA32445302740_102019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA851934255',
        title: 'iPhone 11 256 Gb (product)red 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 214400,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_987990-MLA32445355239_102019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA871659732',
        title: 'iPhone SE 128 Gb Gris Espacial 2 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 126500,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_819940-MLA31003080242_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA872721875',
        title: 'iPhone 11 Pro 512 Gb Plata 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 305000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_665758-MLA32613649888_102019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA867485468',
        title: 'iPhone XR 64 Gb Coral 3 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 153120,
          decimals: 0,
        },
        picture:
          'http://mla-s1-p.mlstatic.com/767991-MLA31002298969_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA798752862',
        title: 'iPhone XS 64 Gb Plata 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 229999,
          decimals: 0,
        },
        picture:
          'http://mla-s1-p.mlstatic.com/888921-MLA31002298922_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA815122861',
        title: 'iPhone XS Max 64 Gb Gris Espacial 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 216000,
          decimals: 0,
        },
        picture:
          'http://mla-s2-p.mlstatic.com/807889-MLA31002342928_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA872810117',
        title: 'iPhone 8 Plus 64 Gb (product)red 3 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 183990,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_647237-MLA31147830987_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA872207048',
        title: 'iPhone XR 128 Gb Coral 3 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 165500,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_823339-MLA31002261499_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA818206830',
        title: 'iPhone XS 256 Gb Plata 4 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 239999,
          decimals: 0,
        },
        picture:
          'http://mla-s1-p.mlstatic.com/678771-MLA31002342900_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA820795727',
        title: 'iPhone 8 256 Gb Plata 2 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 209999,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_614150-MLA31003080328_062019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA867404378',
        title: 'iPhone SE (2nd Generation) 256 Gb (product)red 3 Gb Ram',
        price: {
          currency: 'ARS',
          amount: 158400,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_693254-MLA42320762936_062020-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA765896889',
        title: 'Apple iPhone 7 Plus 32gb Original Caja Outlet Libre',
        price: {
          currency: 'ARS',
          amount: 89998,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_999579-MLA29143396629_012019-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA820232816',
        title: 'iPhone 11-128gb-nuevo-libre De Fabrica-garantia!',
        price: {
          currency: 'ARS',
          amount: 181449,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_627318-MLA33015989333_112019-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA820233037',
        title: 'iPhone 11-128gb-libre De Fabrica-garantia-cuotas Sin Interes',
        price: {
          currency: 'ARS',
          amount: 220069,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_676989-MLA33016148341_112019-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA822727541',
        title: 'iPhone 7 Apple 32gb Sellado Libre Original Garantia Templado',
        price: {
          currency: 'ARS',
          amount: 99989.99,
          decimals: 0.9900000000052387,
        },
        picture:
          'http://http2.mlstatic.com/D_794069-MLA41055482577_032020-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA819397764',
        title: 'iPhone 11 2019 64gb Colores Entrega Hoy 18 Cuotas Sin Intere',
        price: {
          currency: 'ARS',
          amount: 229999,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_780398-MLA32509000886_102019-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA867043549',
        title: 'iPhone SE 2gen 2020 64gb-garantia Oficial!',
        price: {
          currency: 'ARS',
          amount: 121309,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_732162-MLA42320762979_062020-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA835877060',
        title: 'iPhone XR Apple 64gb Liberado Sellado Fc + Gtia + Templado!',
        price: {
          currency: 'ARS',
          amount: 149989.99,
          decimals: 0.9899999999906868,
        },
        picture:
          'http://http2.mlstatic.com/D_705622-MLA41371378050_042020-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA872865944',
        title: 'Apple iPhone 7 Plus 32gb Original Caja Outlet Libre',
        price: {
          currency: 'ARS',
          amount: 89998,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_989472-MLA43139389235_082020-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA839175073',
        title: 'iPhone 6s Plus 16gb  4k En Caja Sellada',
        price: {
          currency: 'ARS',
          amount: 89989.99,
          decimals: 0.9900000000052387,
        },
        picture:
          'http://http2.mlstatic.com/D_642882-MLA41433070395_042020-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA820228402',
        title: 'iPhone 11-64gb-nuevo-libre De Fabrica-garantia!',
        price: {
          currency: 'ARS',
          amount: 173799,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_636917-MLA33015684164_112019-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA844152203',
        title: 'iPhone 7 Apple 32gb Nuevos Libre Original Garantia Sin Caja',
        price: {
          currency: 'ARS',
          amount: 79989.99,
          decimals: 0.9900000000052387,
        },
        picture:
          'http://http2.mlstatic.com/D_697946-MLA41572956988_042020-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA817821313',
        title: 'iPhone 7 128gb Apple Liberado Nuevo Cuotas ',
        price: {
          currency: 'ARS',
          amount: 130000,
          decimals: 0,
        },
        picture:
          'http://mla-s2-p.mlstatic.com/622820-MLA31662507140_082019-I.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA870556536',
        title: 'iPhone 8 Plus 256 Gb Usado Como Nuevo',
        price: {
          currency: 'ARS',
          amount: 90000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_747395-MLA42902253856_072020-O.jpg',
        condition: 'used',
        free_shipping: true,
      },
      {
        id: 'MLA869076789',
        title: 'iPhone 6 64gb Para Repuesto',
        price: {
          currency: 'ARS',
          amount: 10000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_724075-MLA42755724484_072020-O.jpg',
        condition: 'used',
        free_shipping: true,
      },
      {
        id: 'MLA869438471',
        title: 'iPhone 8  256 Gb Como Nuevo!',
        price: {
          currency: 'ARS',
          amount: 89900,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_626690-MLA42792921073_072020-O.jpg',
        condition: 'used',
        free_shipping: true,
      },
      {
        id: 'MLA860961003',
        title: 'iPhone XS 256 Gb Gold Usado Con Detalle Ver Fotos Bat 95%',
        price: {
          currency: 'ARS',
          amount: 130000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_735935-MLA42125524990_062020-O.jpg',
        condition: 'used',
        free_shipping: true,
      },
      {
        id: 'MLA861008212',
        title: 'iPhone 6 Plus A1522 16 Gb Sin Funcionar Para Repuesto ',
        price: {
          currency: 'ARS',
          amount: 16101.33,
          decimals: 0.32999999999992724,
        },
        picture:
          'http://http2.mlstatic.com/D_951060-MLA41638293923_052020-O.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA869740955',
        title: 'iPhone 7 Plus Golden Rose Impecable Estado',
        price: {
          currency: 'ARS',
          amount: 70000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_902784-MLA42828148981_072020-O.jpg',
        condition: 'used',
        free_shipping: true,
      },
      {
        id: 'MLA868950486',
        title: 'iPhone 6s 32gb   Bateria %100',
        price: {
          currency: 'ARS',
          amount: 38000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_753153-MLA31474365394_072019-O.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA867274784',
        title: 'iPhone XR De 128gb Rojo Casi Nuevo',
        price: {
          currency: 'ARS',
          amount: 120000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_707759-MLA42582109266_072020-O.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA864670645',
        title: 'iPhone 5 Blanco 16 Gb Hay Que Cambiar Bateria /reparar Leer',
        price: {
          currency: 'ARS',
          amount: 5500,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_654050-MLA42171952062_062020-O.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA872028465',
        title: 'iPhone 6 Usado',
        price: {
          currency: 'ARS',
          amount: 27000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_917766-MLA43057895788_082020-O.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA872669112',
        title: 'iPhone 7 Plus Rose Gold 128gb Semi Nuevo Liberado De Fabrica',
        price: {
          currency: 'ARS',
          amount: 92999,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_740539-MLA43123398734_082020-O.jpg',
        condition: 'used',
        free_shipping: true,
      },
      {
        id: 'MLA839207714',
        title: 'Apple iPhone 8 64 Gb Sellado Templado Garantia',
        price: {
          currency: 'ARS',
          amount: 129989.99,
          decimals: 0.9900000000052387,
        },
        picture:
          'http://http2.mlstatic.com/D_796786-MLA42259808907_062020-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA872651545',
        title: 'iPhone 5c',
        price: {
          currency: 'ARS',
          amount: 10000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_609821-MLA43122252333_082020-O.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA841092920',
        title: 'iPhone XR 128 Gb Como Nuevo !!',
        price: {
          currency: 'ARS',
          amount: 120000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_925323-MLA40920255724_022020-O.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA868843643',
        title: 'iPhone X Usado 64gb Igual A Nuevo + Garantia + Funda Y Temp.',
        price: {
          currency: 'ARS',
          amount: 123999,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_943394-MLA42770173409_072020-O.jpg',
        condition: 'used',
        free_shipping: true,
      },
      {
        id: 'MLA747566714',
        title: 'iPhone 8 Plus 64gb Liberados Entrega Hoy 18 Cuotas Sin Inter',
        price: {
          currency: 'ARS',
          amount: 189999,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_986723-MLA31598287594_072019-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA829461885',
        title: 'iPhone XS Max -c/factura De Apple Eeuu-en Caja - Cash Mano',
        price: {
          currency: 'ARS',
          amount: 135000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_878114-MLA40068207253_122019-O.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA854254494',
        title: 'iPhone 7',
        price: {
          currency: 'ARS',
          amount: 58000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_963879-MLA41737837057_052020-O.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA868866911',
        title: 'iPhone 4s 16 Gb Libre Libre Excelente Estado!! Soft 9.3.5',
        price: {
          currency: 'ARS',
          amount: 12999,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_900023-MLA28072725265_092018-I.jpg',
        condition: 'used',
        free_shipping: false,
      },
      {
        id: 'MLA817383546',
        title: 'iPhone 11 2019 128gb Colores Entrega Hoy 18 Cuotas Sin Inter',
        price: {
          currency: 'ARS',
          amount: 249999,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_786297-MLA32371978982_092019-O.jpg',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: 'MLA871593183',
        title: 'iPhone X 256 Gb Usado Space Gray Impecable Funciona 100% Ok',
        price: {
          currency: 'ARS',
          amount: 99000,
          decimals: 0,
        },
        picture:
          'http://http2.mlstatic.com/D_724383-MLA43011196583_082020-O.jpg',
        condition: 'used',
        free_shipping: true,
      },
    ],
    author: {
      name: '',
      lastname: '',
    },
  };

  return (
    <div className='container'>
      <div className='container__panel'>
        {items.items.map((item) => (
          <CardItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
