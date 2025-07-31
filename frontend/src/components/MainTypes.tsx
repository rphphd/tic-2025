
export type Technologies = {
    id: string;
    name: string;
    title: string;
    split: string;
    link: string;
    _v: number;
    _id: string;
}

export type Links = {
    technology: string;
    link: string;
    _v: number;
    _id: string;
}

export type Descriptions = {
    id: number;
    technology: string;
    description: string;
    _v: number;
    _id: string;
}

export type TopicsData = {
    technologies: Technologies[];
    topicDescriptions: Descriptions[];
    topicLinks: Links[];
    count: number;
};
