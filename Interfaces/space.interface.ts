export interface ISpace {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        "site_name_long": string;
    },
    links: ILinks;

    "rocket": {
        rocket_name: string;
        first_stage: IFirstStage
        second_stage: ISecondStage;
    }

}

export interface IFirstStage {
    cores: [
        {
            flight: number;
            core: {
                reuse_count: number;
                status: string;
            }
        }
    ]
}

export interface ILinks {
    article_link: null;
    video_link: string;
}


export interface ISecondStage {
    payloads: [
        {
            payload_type: string,
            payload_mass_kg: number,
            payload_mass_lbs: number
        }
    ]
}



