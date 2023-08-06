export type TTranslations = {
    lang: string;
    appName: string;

    contact: string;
    contactLink: string;
    follow: string;
    followLink: string;

    jumbotron: {
        title: string;
        subtitle: string;
        slogans: { title: string; imgName: string }[];
    };

    aboutMe: {
        title: string;
        description: string;
        preSummary: string;
        summary: string;
    };

    together: {
        title: string;
        description: string;
        summary: string;
        imgDescription: string;
    };

    work: {
        title: string;
        description: string;
        steps: string[];
        summary: string;
    };

    gallery: {
        title: string;
        description: string;
        action: string;
        images: { title: string; imgName: string }[]; //must me divide by 3 and by 2 in the same time!
    };

    seeYou: {
        title: string;
    };

    footer: {
        title: string;
        email: string;
        author: string;
        authorLink: string;
        action: string;
    };
};
