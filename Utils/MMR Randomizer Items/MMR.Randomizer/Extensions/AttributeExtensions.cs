using MMR.Randomizer.Attributes;
using MMR.Randomizer.GameObjects;
using System;
using System.Linq;

namespace MMR.Randomizer.Extensions
{
    public static class AttributeExtensions
    {
        public static TAttribute GetAttribute<TAttribute>(this Enum value) where TAttribute : Attribute
        {
            var type = value.GetType();
            var name = Enum.GetName(type, value);
            if (name == null)
            {
                return null;
            }
            return type.GetField(name)
                .GetCustomAttributes(false)
                .OfType<TAttribute>()
                .SingleOrDefault();
        }

        public static string Name(this Item item)
        {
            return item.GetAttribute<ItemNameAttribute>()?.Name;
        }

        public static ItemCategory? ItemCategory(this Item item)
        {
            return item.GetAttribute<ItemPoolAttribute>()?.ItemCategory;
        }

        public static string Location(this Item item)
        {
            return item.GetAttribute<LocationNameAttribute>()?.Name;
        }

        public static bool IsSong(this Item item)
        {
            return (Item.SongHealing <= item && item <= Item.SongOath);
        }
    }
}
