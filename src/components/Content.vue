<template>
     <div>
        <Navigation/>
      <v-card tile class="back" height="200">
      </v-card>
   <!-- infos -->
          <v-card tile flat class="mx-6 my-6">
            <v-card class="mx-2 my-2 px-2 py-2 confirm-card">
                <v-card-text>
                <h2 class="titre">1. Objet</h2>
                <p>Cette méthode est utilisée pour déterminer la viscosité d&#39;échantillons liquides avec tout type de viscosimètres Brookfield.</p>
                </v-card-text>
            </v-card>
            <v-card class="mx-2 my-2 px-2 py-2 confirm-card">
                <v-card-text>
                <h2 class="titre">2. Domaine d'application</h2>
                <p>Cette procédure s’applique au laboratoire Henkel Reghaia.</p>
                </v-card-text>
            </v-card>
             <v-card class="mx-2 my-2 px-2 py-2 confirm-card">
                <v-card-text>
                <h2 class="titre">3. Document de Référence</h2>
                 <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title><strong>- ISO 9000 :</strong></v-list-item-title>
                        <v-list-item-subtitle>Systèmes de management de la qualité — Principes essentiels et vocabulaire.</v-list-item-subtitle>
                        <v-list-item-title><strong>- ISO 9001 :</strong></v-list-item-title>
                        <v-list-item-subtitle>Systèmes de management de la qualité — Exigences.</v-list-item-subtitle>
                        <v-list-item-title><strong>- ISO 9002 :</strong></v-list-item-title>
                        <v-list-item-subtitle>Systèmes de management de la qualité — Lignes directrices pour l’application de l’ISO 9001:2015.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-card-text>
            </v-card>
            <v-card class="mx-2 my-2 px-2 py-2 confirm-card">
                <v-card-text>
                <h2 class="titre">4. Définitions et Abréviations</h2>
                <p>rpm = tours par minute.</p>
                </v-card-text>
            </v-card>
             <v-card class="mx-2 my-2 px-2 py-2 confirm-card">
                <v-card-text>
                <h2 class="titre">5. Responsabilités et Autorités</h2>
                <p>Le technicien contrôle qualité est responsable sur l’analyse. <br> Le responsable laboratoire est responsable sur la validation des méthodes. </p>
                </v-card-text>
            </v-card>
             <v-card class="mx-2 my-2 px-2 py-2 confirm-card">
                <v-card-text>
            <h2 class="titre">6. Processus</h2>
                <v-list-item>
                <v-list-item-content>
                    <v-list-item-subtitle class="text-wrap">
                    Une broche est fixée à un axe vertical et immergée dans l&#39;échantillon liquide. La broche est mise en rotation avec une vitesse définie. La force nécessaire pour surmonter la résistance de l&#39;échantillon contre le mouvement de la broche est mesurée par un couple mètre intégré.
                    <br> La plage de mesure dépend des paramètres suivants :</v-list-item-subtitle>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>• vitesse de rotation de la broche.</v-list-item-title>
                          <v-list-item-title>• taille et forme de la broche.</v-list-item-title>
                          <v-list-item-title>• destinataire de l&#39;échantillon.</v-list-item-title>
                          <v-list-item-title>• type de viscosimètre Brookfield.</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item-title> <strong> Appareil </strong></v-list-item-title>
                        <v-list-item>
                           <v-list-item-content>
                            <v-list-item->• Viscosimètre Brookfield avec jeu de broches.</v-list-item->
                            <v-list-item->• Bain-marie thermostaté.</v-list-item->
                            <v-list-item->• Thermomètre calibré.</v-list-item->
                            <v-list-item->• Récipient de l&#39;échantillon, par ex. bécher en verre.</v-list-item->
                           </v-list-item-content>
                        </v-list-item>
                      <v-list-item-title> <strong> Procédure </strong></v-list-item-title>
                       <v-list-item>
                           <v-list-item-content>
                            <v-list-item->• Placez l&#39;échantillon à analyser dans un récipient, par ex. un bécher, à une hauteur qui permet l&#39;immersion de la broche jusqu&#39;à la marque.</v-list-item->
                            <v-list-item->• Vérifier que l&#39;échantillon est exempt de bulles d&#39;air (démousse par traitement ultrasonique) et de matière en suspension.</v-list-item->
                            <v-list-item->• Placer le récipient dans un bain-marie thermostaté et thermostater pour 20°C ± 0,2°C.</v-list-item->
                            <v-list-item->• Choisissez la broche et la vitesse appropriées pour la viscosité attendue de l&#39;échantillon. Reportez-vous au manuel d&#39;instructions du viscosimètre Brookfield respectif.</v-list-item->
                            <v-list-item->• Les broches doivent également être stockées à 20°C  0,2°C. Installez la broche et plongez-la dans l&#39;échantillon jusqu&#39;au repère sur l&#39;axe.</v-list-item->
                            <v-list-item->• Démarrez le moteur et lisez la valeur après qu&#39;elle se soit stabilisée, mais pas avant 15 s de rotation.</v-list-item->
                           </v-list-item-content>
                        </v-list-item>
                      <v-list-item-title> <strong> Calcul et rapport </strong></v-list-item-title>
                        <v-list-item-subtitle class="text-wrap">Selon le type de viscosimètre Brookfield, la viscosité est affichée directement sur l&#39;appareil ou doit être calculée en multipliant la valeur lue par un facteur pour la broche et la vitesse de rotation utilisées. <br> Reportez-vous au manuel d&#39;instructions de votre viscosimètre Brookfield. <br> Le résultat est rapporté en mPa·s sans décimales. Le type de viscosimètre, le numéro de broche, la vitesse de rotation et la température doivent être indiqués avec la viscosité. </v-list-item-subtitle>
                      <v-list-item-title> <strong> Précision </strong></v-list-item-title>
                        <v-list-item-subtitle class="text-wrap">Les résultats d&#39;un test inter laboratoires (QCLs, laboratoires R&amp;D) avec les mêmes échantillons d&#39;adoucisseurs sont donnés ci-dessous. <br> Toutes les mesures ont été prises 6 fois à 20°C et 20 tr/min, mais avec différents viscosimètres et broches Brookfield</v-list-item-subtitle>
                         <v-img src="../../public/viscosite.jpg"contain height="400" width="550"></v-img>
                </v-list-item-content>
                </v-list-item>
                </v-card-text>
            </v-card>
              <v-card class="mx-2 my-2 px-2 py-2 confirm-card">
                <v-card-text>
                    <h2 class="titre">7. Annexes</h2>
                 <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left white--text tab"> Enregistrement </th>
                                <th class="text-left white--text tab"> Code </th>
                                <th class="text-left white--text tab"> Localisation </th>
                                <th class="text-left white--text tab"> Support </th>
                                <th class="text-left white--text tab"> Durée de conservation </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in things" :key="item.Enregistrement">
                                <td>{{ item.Enregistrement }}</td>
                                <td>{{ item.Code }}</td>
                                <td>{{ item.Localisation }}</td>
                                <td>{{ item.Support }}</td>
                                <td>{{ item.Durée}}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                </v-card-text>
            </v-card>
           </v-card>
             <!-- Footer -->
            <v-footer flat bottom padless>
                <v-col><strong>PR SHEQ VR A.5-01– Procédure de Veille Réglementaire</strong> <br> <div class="primary--text"> Propriété exclusive de HENKEL Algérie Unité de Production Réghaia. <br> Toute reproduction intégrale ou partielle ainsi que son utilisation par, ou la communication à, des tiers, sans accord préalable écrit de l’auteur est illicite.</div> Le R-SMI est responsable de la gestion et l’application de cette procédure.</v-col>
            </v-footer>
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
         things: [
          {
            Enregistrement: 'Fiche de suivi incident qualité',
            Code: 'SD SHEQ TNC 4.3.12-10',
            Localisation: 'R-SMI SharePoint /REG SMI',
            Support: 'Fichier électronique',
            Durée: '03 ans'
          },
          {
            Enregistrement: ' ',
            Code: ' ',
            Localisation: 'R-SMI SharePoint /REG SMI',
            Support: 'Fichier électronique',
            Durée: '03 ans'
          },
          {
            Enregistrement: ' ',
            Code: ' ',
            Localisation: 'R-SMI SharePoint /REG SMI',
            Support: 'Fichier électronique',
            Durée: '03 ans'
          },
          {
            Enregistrement: ' ',
            Code: ' ',
            Localisation: 'R-SMI SharePoint /REG SMI',
            Support: 'Fichier électronique',
            Durée: '03 ans'
          },
          {
            Enregistrement: ' ',
            Code: ' ',
            Localisation: 'R-SMI SharePoint /REG SMI',
            Support: 'Fichier électronique',
            Durée: '03 ans'
          },
          {
            Enregistrement: ' ',
            Code: ' ',
            Localisation: 'R-SMI SharePoint /REG SMI',
            Support: 'Fichier électronique',
            Durée: '03 ans',
          },
          {
            Enregistrement: ' ',
            Code: ' ',
            Localisation: 'R-SMI SharePoint /REG SMI',
            Support: 'Fichier électronique',
            Durée: '03 ans'
          }
        ]

    }),
  }
</script>
<style scoped>
.confirm-card {
  overflow: hidden;
}
.titre{
    color: #ff0011;
}
.back{
    background: url('../../public/labo3.jpg');
}
.tab{
  background-color: #fa3722;
}
</style>