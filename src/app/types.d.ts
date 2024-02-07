interface Tower{
    name:string;
    attackType:string;
    world:World;
    from:From;
    element:"fire" | "grass" | "water" | "none";
    tags:Tag[];
    damage?:RangedNumber[];
    criticalChance?:number[];
    criticalDamage?:number[];
    range?:number[];
    attackSpeed?:number;
    cooldown?:number[];
    isSplash?:boolean;
    impact?:number[];
    buffAmount?:number[];
    buffDuration?:number[];
    buffType?:string;
    burning?:number[];
    burningDuration?:number[];
    knockback?:number[];
    slowness?:number[];
    slownessDuration?:number[];
    armor?:number[];
}

type World = "newlandia" | "noblewood" | "hopetown" | "woodland" | "fallburg" | "soulburg" | "swampland" | "ironhold" | "purplix" | "crab_island" | "moon_station" | "event"
type From = "default" | "merchant" | "witch_parkour" | "hidden_parkour" | "parkour" | "hidden_map" | "community_quest"
type AttackType = "projectile" | "install" | "melee" | "summon" | "summon_proj" | "buff" | "debuff"
type RangedNumber = [number,number]
type Tag = "legendary" | "manual"
