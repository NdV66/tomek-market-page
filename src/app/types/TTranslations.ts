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
    };

    gallery: {
        title: string;
        description: string;
        action: string;
        images: { title: string; imgName: string }[];
    };
};
