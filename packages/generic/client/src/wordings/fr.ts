export { fr };

const fr = {
  agentsPage: {
    title: 'Administration',
    subtitle: 'Gestion des agents',
  },
  business: {
    account: 'Compte',
  },
  homePage: {
    anonymisedView: 'Vue anonymisée',
    applyEveryWhere: 'Appliquer à tous',
    askedAnnotations: 'Annotations demandées',
    cancel: 'Annuler',
    category: 'Catégorie',
    changeCategory: 'Changer de catégorie',
    copyToClipboard: 'Copier dans le presse-papier',
    close: 'Fermer',
    darkMode: 'Mode sombre',
    describeTheProblem: 'Décrivez le problème. Soyez exhaustif.',
    delete: 'Supprimer',
    deletionOption: {
      annotation: 'Annotation seule',
      representative: 'Représentant seul ({count} annot.)',
      entity: "Supprimer toute l'entité",
    },
    displayMode: "Type d'affichage",
    documentInfoEntries: {
      annotations: 'Annotations',
      entities: 'Entités',
      linkedEntities: "Liaison d'entités",
    },
    enterYourText: 'Saisissez votre texte...',
    identicalOccurrencesSpotted: 'occurence(s) identique(s) détectée(s)',
    lightMode: 'Mode lumineux',
    link: 'Créer une liaison',
    originalText: 'Texte original',
    problemIsBlocking: `Ce problème m'empêche de terminer l'annotation du document.`,
    problemType: 'Type de problème',
    pseudonymisation: 'Pseudonymisation',
    redo: 'Rétablir',
    reportProblem: 'Signaler un problème',
    reset: 'Réinitialiser',
    send: 'Envoyer',
    settings: 'Réglages',
    start: 'Commencer',
    undo: 'Annuler',
    unlink: 'Supprimer la liaison',
    unlinkOption: {
      __one__: 'Cette liaison',
      __all__: 'Toutes les liaisons',
    },
    validate: 'Valider',
    wholeCheck: 'Lecture exhaustive',
  },
  loginPage: {
    login: 'Connexion',
    email: 'E-mail',
    forgottenPassword: 'Mot de passe oublié ?',
    password: 'Mot de passe',
    pleaseTryAgain: 'Veuillez réessayer.',
    wrongEmailOrPassword: "L'email et/ou le mot de passe sont erronés.",
  },
  errorPage: 'Une erreur est survenue...',
  shared: {
    back: 'Précédent',
    logout: 'Se déconnecter',
    moreOptions: "Plus d'options",
    problemReportType: { bug: 'Bug', annotationProblem: "Problème lié à l'annotation", suggestion: 'Suggestion' },
  },
  loadingPage: 'Veuillez patienter...',
  problemReportsPage: {
    title: 'Administration',
    subtitle: 'Alertes',
    table: {
      columnTitles: {
        agent: 'Agent',
        date: 'Date',
        number: 'N° décision',
        text: 'Message',
        type: 'Type',
      },
      optionItems: {
        reinjectIntoStream: 'Réinjecter dans le flux',
        reassignToAgent: "Renvoyer à l'agent",
      },
    },
  },
  resetPasswordPage: {
    passwordsMustBeIdentical: 'Les deux mots de passe doivent être identiques.',
    resetPassword: 'Réinitialiser le mot de passe',
  },
  treatmentsPage: {
    title: 'Administration',
    subtitle: 'Décisions traitées',
    table: {
      filter: {
        title: 'Filtrer',
        exportButton: 'Exporter',
      },
      columnTitles: {
        agent: 'Agent',
        duration: 'Tps',
        date: 'Traité le',
        surAnnotation: 'Sur',
        subAnnotation: 'Ss.',
        changeAnnotation: 'Mod.',
        number: 'N° décision',
      },
      statistics: {
        computation: {
          total: 'Total',
          average: 'Moyenne',
        },
        fields: {
          duration: 'Tps',
        },
      },
      optionItems: {
        openDocument: 'Ouvrir la décision...',
      },
    },
  },
};
