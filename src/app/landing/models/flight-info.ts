export interface FlightInfo {
    flight_number: number;
    mission_name: string;
    mission_id: Array<string>;
    launch_year: string
    launch_date_unix: string;
    launch_date_utc: string
    launch_date_local: string
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
    rocket: Rocket;
    ships: Array<string>;
    telemetry: Telemetry;
    launch_site: LaunchSite;
    launch_success: boolean;
    links: Links;
    details: string;
    upcoming: false;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    timeline: Timeline;
    crew: any;
}
export interface Timeline {
    webcast_liftoff: number;
    go_for_prop_loading: number;
    rp1_loading: number;
    stage1_lox_loading: number;
    stage2_lox_loading: number;
    engine_chill: number;
    prelaunch_checks: number;
    propellant_pressurization: number;
    go_for_launch: number;
    ignition: number;
    liftoff: number;
    maxq: number;
    meco: number;
    stage_sep: number;
    second_stage_ignition: number;
    dragon_separation: number;
    dragon_solar_deploy: number;
    dragon_bay_door_deploy: number;
}
export interface Links {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: any;
    reddit_launch: string;
    reddit_recovery: any;
    reddit_media: any;
    presskit: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
    youtube_id: string;
    flickr_images: Array<string>;
}
export interface LaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}
export interface Telemetry {
    flight_club: any;
}
export interface OrbitParams {
    reference_system: string;
    regime: string;
    longitude: any;
    semi_major_axis_km: number;
    eccentricity: number;
    periapsis_km: number;
    apoapsis_km: number;
    inclination_deg: number;
    period_min: number;
    lifespan_years: any;
    epoch: string;
    mean_motion: number;
    raan: number;
    arg_of_pericenter: number;
    mean_anomaly: number;
}
export interface Payloads {
    payload_id: string;
    norad_id: Array<string>;
    cap_serial: string;
    reused: boolean;
    customers: Array<string>;
    nationality: string;
    manufacturer: string;
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
    orbit: string;
    orbit_params: OrbitParams;
    mass_returned_kg: number;
    mass_returned_lbs: number;
    flight_time_sec: number;
    cargo_manifest: string;
}
export interface SecondStage {
    block: 1;
    payloads: Array<Payloads>;
}
export interface Cores {
    core_serial: string;
    flight: number;
    block: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    land_success: boolean;
    landing_intent: boolean;
    landing_type: string;
    landing_vehicle: any;
}
export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
        cores: Array<Cores>;
    };
    second_stage: SecondStage;
    fairings: any;
}
