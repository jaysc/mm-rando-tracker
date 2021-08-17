﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MMR.Randomizer.Attributes
{
    public class ItemNameAttribute : Attribute
    {
        public string Name { get; private set; }

        public ItemNameAttribute(string name)
        {
            Name = name;
        }
    }
}
