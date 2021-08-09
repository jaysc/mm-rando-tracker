export interface ShortenCutsceneSettings {
    General: string;
    BossIntros: string;
}
export interface GameplaySettings {
    StrayFairyMode: string;
    UpdateShopAppearance: boolean;
    AddSongs: boolean;
    SpeedupLabFish: boolean;
    SmallKeyMode: string;
    BossKeyMode: string;
    CloseCows: boolean;
    ArrowCycling: boolean;
    CritWiggleDisable: boolean;
    DrawHash: boolean;
    ElegySpeedup: boolean;
    FastPush: boolean;
    IceTrapQuirks: boolean;
    UpdateWorldModels: boolean;
    OcarinaUnderwater: boolean;
    QuestItemStorage: boolean;
    ContinuousDekuHopping: boolean;
    ProgressiveUpgrades: boolean;
    LogicMode: string;
    EnabledTricks: number[];
    RandomizeDungeonEntrances: boolean;
    RandomizeEnemies: boolean;
    StartingItemMode: string;
    CustomItemListString: string;
    CustomStartingItemListString: string;
    CustomJunkLocationsString: string;
    IceTraps: string;
    IceTrapAppearance: string;
    DamageMode: string;
    DamageEffect: string;
    MovementMode: string;
    FloorType: string;
    NutandStickDrops: string;
    ClockSpeed: string;
    HideClock: boolean;
    BlastMaskCooldown: string;
    EnableSunsSong: boolean;
    AllowFierceDeityAnywhere: boolean;
    ByoAmmo: boolean;
    DeathMoonCrash: boolean;
    ShortenCutsceneSettings: ShortenCutsceneSettings;
    QuickTextEnabled: boolean;
    Character: string;
    GossipHintStyle: string;
    FreeHints: boolean;
    ClearHints: boolean;
    PreventDowngrades: boolean;
    UpdateChests: boolean;
    FixEponaSword: boolean;
    EnablePictoboxSubject: boolean;
    SpeedupBeavers: boolean;
    SpeedupDampe: boolean;
    SpeedupDogRace: boolean;
    SpeedupBank: boolean;
}
export interface RootObject {
    GameplaySettings: GameplaySettings;
}

