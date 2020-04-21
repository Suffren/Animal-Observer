import { InMemoryDbService } from 'angular-in-memory-web-api';
import Report from '../interfaces/interfaces';
import  Users  from  '../users.json';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reports = [
      {
        "id": 1,
        "user_id": 2,
        "animal_type": "bat",
        "gender": "",
        "comment": "J'en ai aperçu après être tombé dans un puit, chez mes parents.",
        "localisation": "Gotham City",
        "time": "2019-10-22T01:00:00-05:00"
      },
      {
        "id": 12,
        "user_id": 3,
        "animal_type": "rabbit",
        "gender": "",
        "comment": "Pas sur du sexe de l'animal",
        "localisation": "Nantes",
        "time": "2019-09-07T01:00:00-05:00"
      },
      {
        "id": 5,
        "user_id": 2,
        "animal_type": "squirrel",
        "gender": "male",
        "comment": "Je l'ai eu ce prêt.",
        "localisation": "Brest",
        "time": "2020-02-19T01:00:00-05:00"
      },
      {
        "id": 9,
        "user_id": 2,
        "animal_type": "deer",
        "gender": "",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "localisation": "Brest",
        "time": "2019-11-05T01:00:00-05:00"
      },
      {
        "id": 4,
        "user_id": 3,
        "animal_type": "boar",
        "gender": "female",
        "comment": "",
        "localisation": "Brest",
        "time": "2020-04-22T01:00:00-05:00"
      } ,
      {
        "id": 23,
        "user_id": 1,
        "animal_type": "fox",
        "gender": "female",
        "comment": "",
        "localisation": "Saint-brieuc",
        "time": "2020-01-09T01:00:00-05:00"
      }
    ];

    const animals = [
      {
        "id": 1,
        "user_id": 2,
        "name": "squirrel",
        "fr_fr": "Écureuil",
        "order": "Rongeurs",
        "familly": "Sciuridés",
        "male": "",
        "female": "",
        "height": "15-24 cm",
        "description": "L'écureuil roux est facilement reconnaissable à sa longue queue rousse en panache de 18 à 24 cm. Il est généralement roux (ou brun-roux, couleur variant selon la saison) et mesure de 18 à 25 cm. En hiver, ses oreilles s'ornent de fins pinceaux de poils. Sa queue, plus ou moins touffue selon les espèces, forme un panache ou un plumeau caractéristique; ils ont la faculté de sauter de branche en branche. Sur tous les continents, en raison de leur mode de vie, les écureuils semblent jouer des fonctions écosystémiques importantes, notamment en « oubliant » des graines qui germent d'autant mieux qu'elles sont parfois enterrées par ces animaux dans des trous où elles sont mises en contact avec des champignons symbiotes. On a récemment montré4 que les écureuils consomment (de nuit surtout pour certaines espèces et toute l'année pour les espèces testées) dans les régions froides et tempérées une grande quantité de champignons, contribuant ainsi à la propagation des spores de ces champignons, dont certains ne font que des fructifications souterraines.",
        "localisation": "Il est presque exclusivement arboricole et diurne. On peut l'observer plus généralement à la cime des arbres (il apprécie particulièrement les pins en zone tempérée). Certains écureuils créent un réseau de galeries souterraines à plusieurs entrées qui leur servent de gîte. Les galeries ne comportent qu’une seule issue de secours, qu’ils empruntent en cas de danger immédiat. L’entrée de cette issue de secours est dégagée et descend en ligne droite à une profondeur d’au moins 0,6 mètre.",
        "spec": "C'est un des rares mammifères entièrement diurnes. Un fait peu connu est l'existence d'écureuils aussi bien droitiers que gauchers, on les reconnaît aisément aux pommes de pin qu'ils laissent derrière eux. En effet, l'inclinaison du pas de vis formé par l'écureuil en grignotant la pomme de pin reflète sa nature."
      },
      {
        "id": 2,
        "name": "deer",
        "fr_fr": "Cerf",
        "order": "Artiodactyles",
        "familly": "Cervidés",
        "male": "",
        "female": "",
        "height": "1.10-1.50 m",
        "description": "L'espèce est grégaire, crépusculaire et nocturne. Originellement adaptés aux milieux ouverts enherbés ou à des zones de type savanes tempérées (broutage de feuilles et bourgeons à différentes hauteurs), ils ont formé des populations et sous-populations qui ont évolué, sous la contrainte des dernières glaciations, et plus rapidement ensuite sous la contrainte de la chasse par l'homme et de l’anthropisation des paysages. À la différence du cerf megaloceros, ils ont, sur une part significative de leur aire potentielle de répartition survécu aux chasseurs du paléolithique et du néolithique en se réfugiant dans les zones de forêt dense. Les grands cervidés doivent cependant affronter localement des phénomènes d'insularisation écologique notamment dû à la fragmentation des forêts où ils se sont réfugiés, ou au fait que certaines populations sont issues d'un petit nombre d'individus réintroduits (risques liés à la consanguinité).",
        "localisation": "Il vit surtout dans les grands massifs de la forêt. Mais dans ces massifs forestiers il affectionne surtout les zones de bois clairs, les parcelles coupées et en régénération, les trouées et clairières avec prairies ou landes et les larges chemins d'exploitation peu fréquentés. Le soir il peut sortir dans les champs et les prairies des lisières s'il y trouve de la tranquillité. Il utilise la forêt dense pour se cacher, notamment la journée. Il s'agit plutôt d'un animal de milieu semi-ouvert à ouvert. Mais il s'est réfugié au sein des grands massifs forestiers car il a été chassé des terres agricoles et des prairies pastorales par l'homme depuis des temps très anciens.",
        "spec": "Les groupes ou hardes sont composées de mâles, de femelles ou mixtes. La cellule de base est « matriarcale » (avec un groupe triangulaire composé d'une biche suivie du jeune de l’année et du jeune de l’année précédente). Leur musculature est adaptée à la course et aux bonds. Ils peuvent courir à 40 km/h en vitesse de croisière mais en cas de danger, les biches et certains cerfs (les plus minces) peuvent courir très vite jusqu'à 76 km/h en pointe. Ils peuvent aussi faire de grands sauts (jusqu'à 2,50 mètres en hauteur et 10 mètres en longueur !"
      },
      {
        "id": 3,
        "name": "boar",
        "fr_fr": "Sanglier",
        "order": "Artiodactyles",
        "familly": "Suidés",
        "male": "",
        "female": "",
        "height": "0.60-1.15 m",
        "description": "Le sanglier est essentiellement nocturne (une évolution peut-être due à la présence de l'être humain). Il est plutôt sédentaire et apparemment attaché à son territoire quand il est entouré d'obstacles, mais dans un milieu qui lui convient, il peut parcourir plusieurs dizaines de kilomètres dans la nuit et son aire vitale peut atteindre de 100 hectares à plus de 1 000 ha. Il sélectionne ses habitats selon la saison, l'heure du jour ou de la nuit et ses besoins alimentaires.Il est grégaire. Une troupe ou harde compte d'ordinaire de six à vingt individus, quoique des troupes (ou bandes) de plus de cent individus aient déjà été observées. L'unité de base est un noyau composé d'une ou plusieurs laies (femmelles). Les ragots (sangliers de 2 à 4 ans) ferment la marche lors des déplacements, mais sont remplacés par des mâles plus âgés en période de rut. Les cortèges sont souvent bruyants, non seulement par le bruit lourd des pas, mais aussi par les grognements, cris, soufflements et autres reniflements. Cependant, les sangliers savent se montrer discrets et silencieux s'ils se sentent menacés.",
        "localisation": "Le sanglier affectionne particulièrement les zones arborées disposant de points d'eau. Cependant, il est relativement ubiquiste (adaption du milieu) et on peut le rencontrer dans de nombreux autres types de milieux. Les landes sont par exemple des milieux très favorables pourvu qu'une strate arbustive même discontinue approche un mètre de haut. Il évite simplement les grandes zones trop à découvert.",
        "spec": "Il est considérée comme une espèce-ingénieur, capable de développer des stratégies d'adaptation à la pression de chasse. À l'approche de l'homme, le sanglier prend généralement la fuite avant qu'on ne l'ait détecté et peut se montrer étonnamment agile et rapide. Une laie pressentant un danger pour ses marcassins, peut se montrer dangereuse et charger. Irrité, un sanglier mâle claque violemment des dents ; on dit alors qu'il « casse la noisette »."
      },
      {
        "id": 4,
        "name": "rabbit",
        "fr_fr": "Lapin",
        "order": "Lagomorphes",
        "familly": "Léporidés",
        "male": "",
        "female": "",
        "height": "10-20 cm",
        "description": "Ces herbivores sont présents un peu partout sur la planète et se répartissent en neuf genres, tous classés dans la famille des léporidés, avec leurs proches parents les lièvres. Ce ne sont donc pas des rongeurs mais des lagomorphes. Ils tentent en permanence d'échapper à quantité de prédateurs, dont l'homme, grâce à une excellente vue à 360°, leurs grandes oreilles à l'ouïe fine et une morphologie particulièrement adaptée à la course. La stratégie de survie des lapins consiste à rester toujours en vue d'un refuge possible. Leurs longues et puissantes pattes arrière repliées sous le corps leur permettent en outre de bondir ou de se tenir assis pour observer leur environnement. Contrairement aux lièvres, tous les lapins vivent en groupe et creusent des terriers qui peuvent être complexes quand le terrain, ou garenne, est favorable.",
        "localisation": "Tous les lapins vivent en groupe et creusent des terriers qui peuvent être complexes quand le terrain, ou garenne, est favorable. Les petits doivent rester cachés dans un nid tapissé du poil ventral de leur mère, creusé à même le sol ou au fond d'un terrier.",
        "spec": "Les lapins se distinguent de leurs cousins lièvres par le fait que les lapereaux naissent nus et aveugles. Comme tous les léporidés, ils pratiquent la cæcotrophie qui consiste à ingérer certaines de leurs déjections partiellement digérées pour en récupérer les derniers nutriments et micro-organismes. Une pratique d'hygiène commune avec les lièvres consiste à prendre des bains de poussière dans une dépression du sol, sec et gratté."
      },
      {
        "id": 5,
        "name": "bat",
        "fr_fr": "Chauve-souris",
        "order": "Chiroptera",
        "familly": "Pteropodidae ",
        "male": "",
        "female": "",
        "height": "4-16 cm / 35-40 cm",
        "description": "Deux sous-ordres étaient classiquement admis : les Microchiroptères (avec 17 familles, environ 146 genres et 814 espèces, de petite taille relative, capables d’écholocation) et les Mégachiroptères (qui ne comportent qu'une famille avec environ 41 genres et 170 espèces dont les fameuses roussettes, de grande taille relative). Beaucoup d'espèces sont grégaires. Les chiroptères sont les seuls mammifères doués du vol actif, à distinguer du vol plané que pratiquent les écureuils volants. Ils se déplacent dans les airs grâce à une aile formée d'une membrane de peau entre le corps, les membres et les doigts. La plupart des espèces ne se posent qu'exceptionnellement au sol et s'y meuvent maladroitement. Ils se reposent en se suspendant aux aspérités par les griffes des orteils. Étant donné leur mode de vie, les chiroptères comptent peu de prédateurs mais on en retrouve chez les oiseaux, les mammifères, les reptiles et même chez les arachnides.",
        "localisation": "Les chauves-souris utilisent deux types de gîtes : un pour l'hiver (cavité sombre sans courant d'air avec une température et surtout une hygrométrie stable, où se mêlent mâles et femelles de plusieurs espèces pour hiberner suspendues au plafond) et un pour l'été (les mâles isolés çà et là dans les fissures de mur, toit, pont, cave ou écorce d'arbre et les femelles groupées en grande nurserie d'une même espèce dans un lieu très chaud sans courant d'air comme les combles, écurie ou tunnel d'égout). Le dessous des ponts est souvent un gîte de transit.",
        "spec": "L'écholocation n'est bien développée que chez les microchiroptères insectivores. Généralement actifs la nuit, ils peuvent se diriger dans l'obscurité en émettant des ultrasons dont ils captent la réflexion, écholocalisant ainsi leurs proies et les obstacles. Les mégachiroptères, quant à eux, se fient plus à leur vue et à leur odorat. À cause de leur aspect étrange et de leur vie nocturne et, par voie de conséquence, du mystère qui entoure leur mode de vie, elles sont souvent victimes d'idées reçues qui leur ont valu longtemps d'être persécutées par l'homme."
      },
      {
        "id": 6,
        "name": "fox",
        "fr_fr": "Renard",
        "order": "Carnivore",// Carnivora
        "familly": "Canidé", // Canidae
        "male": "",
        "female": "",
        "height": "35-50 cm",
        "description": "L'ossature du Renard roux est remarquable pour sa légèreté et l'animal est nettement plus léger qu'un chien ou un coyote de sa taille. Les oreilles mesurent 7,7 à 12,5 cm et les pattes arrière 12 à 18,5 cm. Les Renards roux pèsent entre 2,2 et 14 kg, avec une moyenne de 7 kg pour un mâle adulte, les femelles étant généralement 15 à 20 % moins lourdes que les mâles. Le poids varie suivant les sous-espèces et suivant les individus, mais également pour un même animal suivant son âge et suivant la saison : le renard prend progressivement du poids au cours de ses cinq premières années, en perd en mars avril et atteint un maximum durant l'hiver. Sa queue, qui est plus longue que la moitié de son corps, lui sert de balancier et lui tient chaud quand il dort et qu'il s'en enveloppe.",
        "localisation": "Le Renard roux est très commun car il s'adapte à des milieux très variés. Il affectionne plus particulièrement les zones tempérées au paysage ouvert et varié comprenant forêts, champs cultivés, ruisseaux et collines. En général il réside à l'abri dans les forêts, et va se nourrir à la bordure des bois et des haies où il trouve une grande diversité de fruits, de baies et d'insectes, et dans les champs cultivés, comme les prairies fréquemment fauchées, où il lui est plus facile de chasser les rongeurs. Depuis la seconde partie du XXe siècle il s'installe réellement en ville, et les populations de renards « urbains » sont plus fréquentes. Cela s'explique peut-être par un habitat qui leur est devenu plus favorable par rapport aux campagnes agricoles intensives, ou par l'expansion urbaine rapide. Ils sont notamment présents dans les quartiers et banlieues résidentiels où ils trouvent des jardins et des parcs et de la nourriture en quantité.",
        "spec": "Les renards ont un rôle important dans la régulation des rongeurs en campagne, tels que les campagnols, les mulots, les souris, ou encore les rats. Ils en consomment des milliers chaque année, ce qui en fait des auxiliaire de cultures efficaces pour les agriculteurs permettant de limiter les dégâts que font ces rongeurs aux récoltes. Ils ont également un rôle important dans la lutte contre la maladie de Lyme en consommant les rongeurs sur lesquels vivent les tiques pouvant transmettre cette maladie."
      }
    ];

    const users = Users;

    return {reports, animals, users};
  }

  // Overrides the genId method to ensure that a report always has an id
  genId<T extends Report | any>(items: T[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}