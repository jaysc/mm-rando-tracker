using MMR.Randomizer.GameObjects;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace MMR.Randomizer.Models.Settings
{

    public class GameplaySettings
    {
        public StrayFairyMode StrayFairyMode { get; set; }

        /// <summary>
        ///  Custom item list selections
        /// </summary>
        [JsonIgnore]
        public HashSet<Item> CustomItemList { get; set; } = new HashSet<Item>();

        public bool UpdateShopAppearance { get; set; }
        public bool AddSongs { get; set; }

        public bool SpeedupLabFish { get; set; } = true;

    }
}
