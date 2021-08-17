using MMR.Randomizer.Extensions;
using MMR.Randomizer.GameObjects;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace MMR.Randomiser.Generator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var itemId = 0;
            var items = new List<JsonItem>();
            foreach (Item item in Enum.GetValues(typeof(Item)))
            {
                items.Add(new JsonItem 
                {
                    ID = itemId,
                    Name = item.Name(),
                    ItemCategory = item.ItemCategory().ToString(),
                    LocationName = item.Location()?.ToString()
                });

                itemId++;
            }

            File.WriteAllText("items.json", JsonConvert.SerializeObject(items));
        }
    }
}
