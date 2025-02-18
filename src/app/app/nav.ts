import { Home, ArrowUpDown, ReceiptText } from "lucide-react";
import { PiTipJar } from "react-icons/pi";
import { FaChartPie } from "react-icons/fa";
import { Transaction } from "@/types/types";

export const navigation = [
  {
    title: "overview",
    url: "dashboard",
    icon: Home,
  },
  {
    title: "transaction",
    url: "transactions",
    icon: ArrowUpDown,
  },
  {
    title: "budget",
    url: "budget",
    icon: FaChartPie,
  },
  {
    title: "pots",
    url: "pots",
    icon: PiTipJar,
  },
  {
    title: "recurring bill",
    url: "bills",
    icon: ReceiptText,
  },
];

export const sorts = [
  { name: "latest", value: "latest" },
  { name: "oldest", value: "oldest" },
  { name: "A to Z", value: "a-z" },
  { name: "Z to A", value: "z-a" },
  { name: "highest", value: "highest" },
  { name: "lowest", value: "lowest" },
];
export const category = [
  { name: "all transactions", value: "all-transactions" },
  { name: "entertainment", value: "entertainment" },
  { name: "bills", value: "bills" },
  { name: "groceries", value: "groceries" },
  { name: "dining out", value: "dining out" },
  { name: "transportation", value: "transportation" },
  { name: "personal care", value: "personal care" },
  { name: "others", value: "others" },
];

export const colors = [
  {
    id: 1,
    name: "Green",
    theme: "#277C78",
  },
  {
    id: 2,
    name: "Yellow",
    theme: "#F2CDAC",
  },
  {
    id: 3,
    name: "Cyan",
    theme: "#82C9D7",
  },
  {
    id: 4,
    name: "Navy",
    theme: "#626070",
  },
  {
    id: 5,
    name: "Red",
    theme: "#C94736",
  },
  {
    id: 6,
    name: "Purple",
    theme: "#826CB0",
  },
  {
    id: 7,
    name: "Turquoise",
    theme: "#597C7C",
  },
  {
    id: 8,
    name: "Brown",
    theme: "#A52A2A",
  },
  {
    id: 9,
    name: "Magenta",
    theme: "#934F6F",
  },
  {
    id: 10,
    name: "Blue",
    theme: "#3F82B2",
  },
  {
    id: 11,
    name: "Grey",
    theme: "#97A0AC",
  },
  {
    id: 12,
    name: "Army",
    theme: "#7F9161",
  },
  {
    id: 13,
    name: "Gold",
    theme: "#CAB361",
  },
  {
    id: 14,
    name: "Orange",
    theme: "#BE6C49",
  },
];

export const allTransactions:any[] = [
    {
      "avatar": "/assets/images/avatars/emma-richardson.jpg",
      "name": "Emma Richardson",
      "category": "General",
      "created_at": "2024-08-19T14:23:11Z",
      "amount": 75.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/savory-bites-bistro.jpg",
      "name": "Savory Bites Bistro",
      "category": "Dining Out",
      "created_at": "2024-08-19T20:23:11Z",
      "amount": -55.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/daniel-carter.jpg",
      "name": "Daniel Carter",
      "category": "General",
      "created_at": "2024-08-18T09:45:32Z",
      "amount": -42.3,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/sun-park.jpg",
      "name": "Sun Park",
      "category": "General",
      "created_at": "2024-08-17T16:12:05Z",
      "amount": 120.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/urban-services-hub.jpg",
      "name": "Urban Services Hub",
      "category": "General",
      "created_at": "2024-08-17T21:08:09Z",
      "amount": -65.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/liam-hughes.jpg",
      "name": "Liam Hughes",
      "category": "Groceries",
      "created_at": "2024-08-15T18:20:33Z",
      "amount": 65.75,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/lily-ramirez.jpg",
      "name": "Lily Ramirez",
      "category": "General",
      "created_at": "2024-08-14T13:05:27Z",
      "amount": 50.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/ethan-clark.jpg",
      "name": "Ethan Clark",
      "category": "Dining Out",
      "created_at": "2024-08-13T20:15:59Z",
      "amount": -32.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/james-thompson.jpg",
      "name": "James Thompson",
      "category": "Entertainment",
      "created_at": "2024-08-11T15:45:38Z",
      "amount": -5.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/pixel-playground.jpg",
      "name": "Pixel Playground",
      "category": "Entertainment",
      "created_at": "2024-08-11T18:45:38Z",
      "amount": -10.0,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/ella-phillips.jpg",
      "name": "Ella Phillips",
      "category": "Dining Out",
      "created_at": "2024-08-10T19:22:51Z",
      "amount": -45.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/sofia-peterson.jpg",
      "name": "Sofia Peterson",
      "category": "Transportation",
      "created_at": "2024-08-08T08:55:17Z",
      "amount": -15.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/mason-martinez.jpg",
      "name": "Mason Martinez",
      "category": "Lifestyle",
      "created_at": "2024-08-07T17:40:29Z",
      "amount": -35.25,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/green-plate-eatery.jpg",
      "name": "Green Plate Eatery",
      "category": "Groceries",
      "created_at": "2024-08-06T08:25:44Z",
      "amount": -78.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/sebastian-cook.jpg",
      "name": "Sebastian Cook",
      "category": "Transportation",
      "created_at": "2024-08-06T10:05:44Z",
      "amount": -22.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/william-harris.jpg",
      "name": "William Harris",
      "category": "Personal Care",
      "created_at": "2024-08-05T14:30:56Z",
      "amount": -10.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/elevate-education.jpg",
      "name": "Elevate Education",
      "category": "Education",
      "created_at": "2024-08-04T11:15:22Z",
      "amount": -50.0,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/serenity-spa-and-wellness.jpg",
      "name": "Serenity Spa & Wellness",
      "category": "Personal Care",
      "created_at": "2024-08-03T14:00:37Z",
      "amount": -30.0,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/spark-electric-solutions.jpg",
      "name": "Spark Electric Solutions",
      "category": "Bills",
      "created_at": "2024-08-02T09:25:11Z",
      "amount": -100.0,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/rina-sato.jpg",
      "name": "Rina Sato",
      "category": "Bills",
      "created_at": "2024-08-02T13:31:11Z",
      "amount": -50.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/swift-ride-share.jpg",
      "name": "Swift Ride Share",
      "category": "Transportation",
      "created_at": "2024-08-01T18:40:33Z",
      "amount": -18.75,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/aqua-flow-utilities.jpg",
      "name": "Aqua Flow Utilities",
      "category": "Bills",
      "created_at": "2024-07-30T13:20:14Z",
      "amount": -100.0,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/ecofuel-energy.jpg",
      "name": "EcoFuel Energy",
      "category": "Bills",
      "created_at": "2024-07-29T11:55:29Z",
      "amount": -35.0,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/yuna-kim.jpg",
      "name": "Yuna Kim",
      "category": "Dining Out",
      "created_at": "2024-07-29T13:51:29Z",
      "amount": -28.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/flavor-fiesta.jpg",
      "name": "Flavor Fiesta",
      "category": "Dining Out",
      "created_at": "2024-07-27T20:15:06Z",
      "amount": -42.75,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/harper-edwards.jpg",
      "name": "Harper Edwards",
      "category": "Shopping",
      "created_at": "2024-07-26T09:43:23Z",
      "amount": -89.99,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/buzz-marketing-group.jpg",
      "name": "Buzz Marketing Group",
      "category": "General",
      "created_at": "2024-07-26T14:40:23Z",
      "amount": 3358.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/technova-innovations.jpg",
      "name": "TechNova Innovations",
      "category": "Shopping",
      "created_at": "2024-07-25T16:25:37Z",
      "amount": -29.99,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/bytewise.jpg",
      "name": "ByteWise",
      "category": "Lifestyle",
      "created_at": "2024-07-23T09:35:14Z",
      "amount": -49.99,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/nimbus-data-storage.jpg",
      "name": "Nimbus Data Storage",
      "category": "Bills",
      "created_at": "2024-07-21T10:05:42Z",
      "amount": -9.99,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/emma-richardson.jpg",
      "name": "Emma Richardson",
      "category": "General",
      "created_at": "2024-07-20T17:30:55Z",
      "amount": -25.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/daniel-carter.jpg",
      "name": "Daniel Carter",
      "category": "General",
      "created_at": "2024-07-19T12:45:09Z",
      "amount": 50.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/sun-park.jpg",
      "name": "Sun Park",
      "category": "General",
      "created_at": "2024-07-18T19:20:23Z",
      "amount": -38.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/harper-edwards.jpg",
      "name": "Harper Edwards",
      "category": "Shopping",
      "created_at": "2024-07-17T14:55:37Z",
      "amount": -29.99,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/liam-hughes.jpg",
      "name": "Liam Hughes",
      "category": "Groceries",
      "created_at": "2024-07-16T10:10:51Z",
      "amount": -52.75,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/lily-ramirez.jpg",
      "name": "Lily Ramirez",
      "category": "General",
      "created_at": "2024-07-15T16:35:04Z",
      "amount": 75.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/ethan-clark.jpg",
      "name": "Ethan Clark",
      "category": "Dining Out",
      "created_at": "2024-07-14T20:50:18Z",
      "amount": -41.25,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/rina-sato.jpg",
      "name": "Rina Sato",
      "category": "Entertainment",
      "created_at": "2024-07-13T09:15:32Z",
      "amount": -10.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/james-thompson.jpg",
      "name": "James Thompson",
      "category": "Bills",
      "created_at": "2024-07-12T13:40:46Z",
      "amount": -95.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/ella-phillips.jpg",
      "name": "Ella Phillips",
      "category": "Dining Out",
      "created_at": "2024-07-11T18:05:59Z",
      "amount": -33.75,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/yuna-kim.jpg",
      "name": "Yuna Kim",
      "category": "Dining Out",
      "created_at": "2024-07-10T12:30:13Z",
      "amount": -27.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/sofia-peterson.jpg",
      "name": "Sofia Peterson",
      "category": "Transportation",
      "created_at": "2024-07-09T08:55:27Z",
      "amount": -12.5,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/mason-martinez.jpg",
      "name": "Mason Martinez",
      "category": "Lifestyle",
      "created_at": "2024-07-08T15:20:41Z",
      "amount": -65.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/sebastian-cook.jpg",
      "name": "Sebastian Cook",
      "category": "Transportation",
      "created_at": "2024-07-07T11:45:55Z",
      "amount": -20.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/william-harris.jpg",
      "name": "William Harris",
      "category": "General",
      "created_at": "2024-07-06T17:10:09Z",
      "amount": 20.0,
      "recurring": false
    },
    {
      "avatar": "/assets/images/avatars/elevate-education.jpg",
      "name": "Elevate Education",
      "category": "Education",
      "created_at": "2024-07-05T11:15:22Z",
      "amount": -50.0,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/serenity-spa-and-wellness.jpg",
      "name": "Serenity Spa & Wellness",
      "category": "Personal Care",
      "created_at": "2024-07-03T14:00:37Z",
      "amount": -30.0,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/spark-electric-solutions.jpg",
      "name": "Spark Electric Solutions",
      "category": "Bills",
      "created_at": "2024-07-02T09:25:51Z",
      "amount": -100.0,
      "recurring": true
    },
    {
      "avatar": "/assets/images/avatars/swift-ride-share.jpg",
      "name": "Swift Ride Share",
      "category": "Transportation",
      "created_at": "2024-07-02T19:50:05Z",
      "amount": -16.5,
      "recurring": false
    }
]
  
export const allBudgets = [
  {
    category: "Entertainment",
    maximum: 50.0,
    theme: "#277C78",
  },
  {
    category: "Bills",
    maximum: 750.0,
    theme: "#82C9D6",
  },
  {
    category: "Dining Out",
    maximum: 75.0,
    theme: "#F2CDAC",
  },
  {
    category: "Personal Care",
    maximum: 100.0,
    theme: "#626070",
  },
];

export const allPots = [
  {
    id: 1,
    name: "Savings",
    target: 2000.0,
    total: 159.0,
    theme: "#277C78",
  },
  {
    id: 2,
    name: "Concert Ticket",
    target: 150.0,
    total: 125.0,
    theme: "#626070",
  },
  {
    id: 3,
    name: "Gift",
    target: 150.0,
    total: 110.0,
    theme: "#82C9D7",
  },
  {
    id: 4,
    name: "New Laptop",
    target: 1000.0,
    total: 10.0,
    theme: "#F2CDAC",
  },
  {
    id: 5,
    name: "Holiday",
    target: 1440.0,
    total: 531.0,
    theme: "#826CB0",
  },
];