const regimes = {
    
    "0000": {
        codeDouanier: "---",
        description: "---",
        consequences: "---",
        consequencesFin: "---",
        statut: "---",
        bureau: "---",
        regimeCode: "---",
        variantes: [
            { code: "---", description: "---" },
            { code: "---", description: "---" },
            { code: "---", description: "---" }
        ]
    },
    
    
    "9000": {
        codeDouanier: "IM9",
        description: "Régime de Cabotage /  Transport de port à port d'un même pays ou international",
        consequences: "DETAILS ET CONSEQUENCE SUR LE CODE REGIME ENTREE",
        consequencesFin: "SUSPENSIF DES DROITS ET TAXES",
        statut: "REGIME ECONOMIQUE IMPORT",
        bureau: "-",
        regimeCode: "IM9100 Régime de Cabotage",
        variantes: [
            { code: "IM9200", description: "Entrée en zone franche" },
            { code: "IM92800", description: "Entrée en zone franche industriel en suite de transit national" },
            { code: "IM9292", description: "Mutation de zone franche" },
            { code: "IM9294", description: "Entrée en zone franche en régularisation de bon provisoire " },
            { code: "IM9351", description: "Declaration anniversaire d'AT speciale (mat. d'entreprises)" },
            { code: "IM9900", description: "Declaration Manuelle" },
            { code: "IM9910", description: "Liquidation Manuelle en suite d'exportation" },
            { code: "IM9922", description: "Liquidation Manuelle en suite de perfectionnement passif pour transformation" },
            { code: "IM9923", description: "Liquidation Manuelle en suite de perfectionnement passif pour réparation" },
            { code: "IM9924", description: "Liquidation Manuelle en suite de perfectionnement passif pour autre " },
            { code: "IM9930", description: "Liquidation manuelle en suite de reexportation" },
            { code: "IM9950", description: "Liquidation manuelle en suite d'admission temporaire ordinaire" },
            { code: "IM9951", description: "Liquidation manuelle en suite d'ATME" },
            { code: "IM9952", description: "Liquidation manuelle en suite de perfectionnement actif" },
            { code: "IM9970", description: "Liquidation manuellle en suite d'entrepot de stockage " },
            { code: "IM9980", description: "Liquidation manuelle en suite de transit national "},
            { code: "IM9992", description: "Liquidation manuelle en suite de zone franche"},
        ]
    },


    "8000": {
        codeDouanier: "IM8",
        description: "Transit National ou international /  Produit traversant le territoire douanier pour l'nterland  en suspension des droits et taxes",
        consequences: "DETAILS ET CONSEQUENCE SUR LE CODE REGIME ENTREE",
        consequencesFin: "SUSPENSIFS DES DROITS ET TAXES IMPORT",
        statut: "REGIME ECONOMIE IMPORT",
        bureau: "CIAB 4",
        regimeCode: "IM8000 TRANSIT NATIONAL ",
        variantes: [
            { code: "IM8052", description: "Transit national en suite de perfectionnement actif" },
            { code: "IM8100", description: "Transbordement" },
            { code: "IM8070", description: "Transit national en suite d'entrepot de stockage" },
            { code: "IM82800", description: "Transit national en suite de depot" },
            { code: "IM8200", description: "Transit national par mer vers port / aéroport CI en suite de transit" }
            
        ]
    },



    "7000": {
        codeDouanier: "IM7",
        description: "MISE EN ENTREPOT POUR STOCKAGE / MISE EN ENTREPOT POUR STOCKAGE DE PRODUITS IMPORTES",
        consequences: "DETAILS ET CONSEQUENCE SUR LE CODE REGIME ENTREE",
        consequencesFin: "SUSPENSIF DES DROITS ET TAXES IMPORT ",
        statut: "REGIME ECONOMIE IMPORT",
        bureau: "CIAB 4",
        regimeCode: "IM7000 MISE EN ENTREPOT POUR STOCKAGE",
        variantes: [
            { code: "IM7050", description: "Entrée en entrepot de stockage en suite d'AT ordinaire" },
            { code: "IM7051", description: "Entrée en entrepot de stockage en suite d'AT speciale" },
            { code: "IM7052", description: "Entrée en entrepot de stockage en suite d'AT speciale perfectionnement actif" },
            { code: "IM7070", description: "Mutation d'entrepot" },
            { code: "IM7079", description: "Entrepot de stockage en suite de depot" },
            { code: "IM7080", description: "Mise en entrepot en suite de transit national" },
            { code: "IM7094", description: "Entrepot de stockage En Régularisation de Bon Provisoire" },
        ]
    },



    "6000": {
        codeDouanier: "IM6",
        description: "REGIME DE REIMPORTATION EN SUITE DE PERFECTIONNEMENT PASSIF / REIMPORTATION DE PRODUIT EN SUITE D'EXPORTATION TEMPORAIRE ",
        consequences: "DETAILS ET CONSEQUENCE SUR LE CODE REGIME ENTREE",
        consequencesFin: "PAIEMENT DES DROITS ET TAXES SUR LA PLUS VALUE A LA RE-IMPORTATION ",
        statut: "REGIME ECONOMIQUE IMPORTT",
        bureau: "CIAB 5",
        regimeCode: "IM6000;Regime de Re importation en suite d'exportation temporaire",
        variantes: [
            { code: "IM6000", description: "REIMPORTATION EN SUITE DE PERFECTIONNEMENT PASSIF" },
            { code: "IM6022", description: "Réimportation en suite de perfectionnement passif pour transformation" },
            { code: "IM6023", description: "Réimportation en suite de perfectionnement passif pour réparation" },
            { code: "IM6024", description: "Re-importation en suite de perfectionnement passif autre" },
           
            
        ]
    },

    "5000": {
        codeDouanier: "IM5",
        description: "ADMISSION TEMPORAIRE POUR PERFECTIONNEMENT ACTIF (OUVRAISON,...) / PRODUIT TEMPORAIREMENT ADMIS EN CI POUR OUVRAISON",
        consequences: "DETAILS ET CONSEQUENCE SUR LE CODE REGIME ENTREE",
        consequencesFin: "SUSPENSIF DES DROITS ET TAXES",
        statut: "REGIME ECONOMIQUE IMPORT",
        bureau: "CIAB 7",
        regimeCode: "IM5000 Admission Temporaire Normale spéciale (matériel d’entreprise",
        variantes: [
            { code: "IM5070", description: "Admission Temporaire Normale suite entrepôt de stockage" },
            { code: "IM5280", description: "Admission Temporaire Spéciale en suite de transit" },
            { code: "IM5270", description: "Admission Temporaire spéciale suite entrepôt " },
            { code: "IM5150", description: "Admission Temporaire spéciale suite d'ATO" },
            { code: "IM5050", description: "Mutation d'admission temporaire ordinaire) " },
            { code: "IM5100", description: "Admission Temporaire Normale spéciale (matériel d’entreprise" },
            { code: "IM5200", description: "Admission Temporaire pour perfectionnement actif (ouvraison, réparation, transformation)" },
            { code: "IM5294", description: "Admission Temporaire  pour perfectionnement actif en régularisation de Bon Provisoire" },
            { code: "IM5052", description: "Admission Temporaire Ordinaire ensuite de perfectionnement actif)" },
            { code: "IM5080", description: "Admission temporaire ordinaire en suite de transit national)" },
            { code: "IM5092", description: "Admission temporaire en suite de zone franche)" },
            { code: "IM5O94", description: "Admission temporaire en régularisation de Bon Provisoire)" },
            { code: "IM5170", description: "Admission Temporaire Normale suite entrepôt de stockage" },
            { code: "IM5179", description: "Admission temporaire speciale en suite d'entrepot de stockage)" },
            { code: "IM5180", description: "Admission temporaire speciale en suite de transit national)" },
            { code: "IM5250", description: "Mutation d'ATO en ATT)" },
            { code: "IM5252", description: "Mutation de perfectionnement actif (ouvraison, reparation...))" },
            { code: "IM5270", description: "AT pour perfectionnement actif en suite d'entrepot de stockage)" },
            { code: "IM5279", description: "Perfectionnement actif en suite de depot)" }
            



    





        ]
    },

    "4000": {
        codeDouanier: "IM4",
        description: "MISE A LA CONSOMMATION DIRECTE / PRODUIT A VENDRE OU UTILISES EN CI",
        consequences: "DETAILS ET CONSEQUENCE SUR LE CODE REGIME ENTREE",
        consequencesFin: "PAIEMENT DES DROITS ET TAXES IMPORT",
        statut: "REGIME DE DROIT COMMUN IMPORT",
        bureau: "CIAB 1",
        regimeCode: "IM4000 MISE A LA CONSOMMATION DIRECTE ",
        variantes: [
            { code: "IM4050", description: "Mise a la consommation en suite d'admission temporaire ordinaire" },
            { code: "IM4051", description: "MISE À LA CONSOMMATION EN SUITE AT POUR PERFECTIONNEMENT ACTIF" },
            { code: "IM4052", description: "MISE À LA CONSOMMATION EN SUITE ATS, RC" },
            { code: "IM4070", description: "MISE À LA CONSOMMATION EN SUITE ENTREPÔT, RC" },
            { code: "IM4080", description: "Mise a la consommation en suite de transit national," },
            { code: "IM4079", description: "Mise a la consomation en suite de depot" },
            { code: "IM4094", description: "Mise à la consommation en régularisation de Bon Provisoire," }
    
            
    
            



    





        ]
    },

    "3000": {
        codeDouanier: "EX3",
        description: "REGIME DE RE EXPORTATION / RE-EXPORTATION DE PRODUIT HORS DE LA CI",
        consequences: "DETAILS ET CONSEQUENCE SUR LE CODE REGIME ENTREE",
        consequencesFin: "SUSPENSIF DES DROITS ET TAXES ",
        statut: "REGIME ECONOMIQUE EXPORT",
        bureau: "CIABE",
        regimeCode: "EX3000  Regime de  RE-Exportation",
        variantes: [
            { code: "EX3050", description: "Réexportation suite ATO" },
            { code: "EX3051", description: "Réexportation suite ATO spécial " },
            { code: "EX3052", description: "Réexportation pour perfectionnement actif" },
            { code: "EX3070", description: "Réexportation en suite d’entrepôt de stockage" },
            { code: "EX3079", description: "Re-exportation suite de depot" },
            { code: "EX3080", description: "Re-exportation en suite de transit national" },
            { code: "EX3092", description: "Re-exportation en sortie de zone franche" },
            { code: "EX3094", description: "Re-exportation en régularisation de Bon Provisoire" }
            
        
   
  
  
            



    





        ]
    },

    "2000": {
        codeDouanier: "EX2",
        description: "EXPORTATION TEMPORAIRE / EXPORTATION TEMPORAIRE DE PRODUIT PRIS LOCALEMENT",
        consequences: "DETAILS ET CONSEQUENCE SUR LE CODE REGIME ENTREE",
        consequencesFin: "SUSPENSIF DES DROITS ET TAXES ",
        statut: "REGIME ECONOMIQUE EXPORT",
        bureau: "CIABE",
        regimeCode: "EX2000  Exportation Temporaire",
        variantes: [
            { code: "EX2400", description: "Exportation temporaire pour Perfectionnement passif autre" },
            { code: "EX2200", description: "Exportation temporaire pour Perfectionnement passif autre pour transformation " },
            { code: "EX2300", description: "Exportation temporaire pour Perfectionnement passif autre en suite de réparation " },
   
  
  
            



    





        ]
    },

    "1000": {
        codeDouanier: "EX1",
        description: " EXPORTATION DE SIMPLE SORTIE / EXPORTATION DEFINITIVE DE PRODUIT PRIS LOCALEMENT",
        consequences: "DETAILS ET CONSEQUENCE SUR LE CODE REGIME ENTREE",
        consequencesFin: "PAIEMENT DU DUS A L'EXPORT ",
        statut: "REGIME DE DROIT COMMUN EXPORT",
        bureau: "CIABE",
        regimeCode: "EX1000 Exportation définitive",
        variantes: [
            { code: "EX1052", description: "Exportation définitive en suite de perfectionnement actif" },
            { code: "EX1022", description: "Exportation définitive en suite de perfectionnement actif pour transformation " },
            { code: "EX1023", description: "Exportation définitive en suite de perfectionnement actif pour réparation " },
            { code: "EX1024", description: "Exportation définitive en suite de perfectionnement passif autre" },
            { code: "EX1094", description: "Exportation en régularisation de Bon Provisoire " }
            
   
  
  
            



    





        ]
    },



}
function updateTable() {
    const code = document.getElementById('codeRegime').value;
    const regime = regimes[code];

    if (regime) {
        document.getElementById('codeDouanier').textContent = `CODE REGIME DOUANIER IMPORT: ${regime.codeDouanier}`;
        document.getElementById('descriptionRegime').textContent = regime.description;
        document.getElementById('consequences').textContent = regime.consequences;
        document.getElementById('consequencesFin').textContent = regime.consequencesFin;
        document.getElementById('statutRegime').textContent = regime.statut;
        document.getElementById('bureauSortie').textContent = regime.bureau;
        document.getElementById('regimeCode').textContent = regime.regimeCode;

        const tableBody = document.getElementById('variantesTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = '';  // Clear the table body

        // Insert the variantes into the table
        regime.variantes.forEach(variant => {
            const row = document.createElement('tr');
            const codeCell = document.createElement('td');
            const descriptionCell = document.createElement('td');
            
            codeCell.textContent = variant.code;
            descriptionCell.textContent = variant.description;

            row.appendChild(codeCell);
            row.appendChild(descriptionCell);
            tableBody.appendChild(row);
        });
    } else {
        // Reset fields if the code is invalid or not found
        document.getElementById('codeDouanier').textContent = "CODE REGIME DOUANIER IMPORT: -----";
        document.getElementById('descriptionRegime').textContent = "-----";
        document.getElementById('consequences').textContent = "DETAILS SUR LE CODE REGIME ENTREE";
        document.getElementById('consequencesFin').textContent = "-----";
        document.getElementById('statutRegime').textContent = "----";
        document.getElementById('bureauSortie').textContent = "---";
        document.getElementById('regimeCode').textContent = "----";

        const tableBody = document.getElementById('variantesTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = '';  // Clear the table body for invalid codes
    }
}

function detectEnter(event) {
    if (event.key === "Enter") {
        updateTable();
    }
}

