# easy-countrydata
Library to provide country's name, _id and countryId

# Install 

```
npm i @cloudparker/easy-country-state-data --save-dev
```

# CDN install

```
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-country-state-data@main/dist/index.js" />
```

# Usage

### Nodejs
```js
import EasyCountryStateData from "@cloudparker/easy-country-state-data@1.0.0";

EasyCountryStateData.getStates();
// Get list of states of all countries


EasyCountryStateData.getStates('us');
// Get list of states of US 


EasyCountryStateData.getStates('in');
// Get list of states of India

```

### Browser
```js
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-country-state-data@main/dist/index.js" />

 
EasyCountryStateData.getStates();
// Get list of states of all countries


EasyCountryStateData.getStates('us');
// Get list of states of US 


EasyCountryStateData.getStates('in');
// Get list of states of India

```
