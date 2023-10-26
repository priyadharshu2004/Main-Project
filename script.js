var fnameError = document.getElementById('fname-error');
var lnameError = document.getElementById('lname-error');
var dobError = document.getElementById('dob-error');
var emailError = document.getElementById('email-error');
var genderError = document.getElementById('gender-error');
var mobileError = document.getElementById('mobile-error');
var countryError = document.getElementById('country-error');
var stateError = document.getElementById('state-error');
var addressError = document.getElementById('address-error');
var pinCodeError = document.getElementById('pin-error');
var cityError = document.getElementById('city-error');
var districtError = document.getElementById('district-error');
var hobbiesError = document.getElementById('hobbies-error');
var submitError = document.getElementById('submit-error');
var addressObject = {
    "INDIA": {
        "Assam": ["Bongaigaon", "Jorhat", "Kokrajhar", "Lakhimpur", "Tinsukia", "Kamrup Metropolitan"],
        "Goa": ["North Goa", "South Goa"],
        "Himachal Pradesh": ["Kangra", "Kullu", "Mandi", "Shimla", "Lahaul and Spiti", "Kinnaur"],    
        "Kerela": ["Kollam", "Malappuram", "Thiruvananthapuram", "Kannur", "Palakkad"],    
        "Tripura": ["Dhalai", "North Tripura", "South Tripura", "West Tripura"],    
        "Sikkim": ["Gangtok", "Mangan", "Namchi", "Geyzing", "Pakyong", "Soreng"],   
        "West Bengal": ["Malda", "Alipurduar", "Howrah", "Kolkata", "Bankura", "Nadia"],
        "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "South Delhi", "West Delhi"]        
      },
      "USA": {
        "Arizona": ["Gila", "Yuma", "Apache", "Mohave", "Santa Cruz", "Greenlee"],
        "California": ["San Francisco", "Los Angeles", "Sacramento", "San Diego", "Riverside", "San Jose"],
        "Georgia": ["Atlanta", "Augusta", "Columbus", "Savannah"],
        "Michigan": ["Watersmeet", "Holland", "Flint", "Holly", "Dearborn"],
        "New York": ["Shirley", "Brooklyn", "Manhattan", "Bronx", "Yonkers"],
        "Washington": ["Pierce", "Yakima", "Thurston", "Snohomish"],
        "New Mexico": ["Alamogordo", "Santa Fe", "Albuquerque"]
      },
      "BANGLADESH": {
          "Barisal": ["Barisal", "Barguna", "Bhola", "Pirojpur", "Jhalokati", "Patuakhali"],
          "Khulna": ["Bagerhat", "Jashore", "Khulna", "Narail", "Satkhira", "Meherpur"],
          "Rajshahi": ["Natore", "Sirajganj", "Pabna", "Bogura", "Naogaon", "Joypurhat"],
          "Rangpur": ["Dinajpur", "Kurigram", "Rangpur", "Thakurgaon", "Panchagarh", "Gaibandha"],
          "Sylhet": ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
          "Dhaka": ["Gazipur", "Tangail", "Rajbari", "Gopalganj", "Faridpur", "Narayanganj"],
          "Chittagong": ["Rangamati", "Cox's Bazar", "Chattogram", "Lakshmipur", "Chandpur", "Brahmanbaria"]
      }
}