<template>
  <div>
    <v-row align-content="center">
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card :elevation="5" class="mt-10">
          <v-divider class="mb-5" />
          <span class="d-flex">
            <v-menu transition="slide-x-transition">
              <template #activator="{ on, attrs }">
                <v-btn fab text v-bind="attrs" v-on="on">
                  <v-tooltip top>
                    <!-- eslint-disable-next-line -->
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon v-bind="attrs" color="info" v-on="on"
                        >mdi-information</v-icon
                      >
                    </template>
                    <span>Table Viewing Information</span>
                  </v-tooltip>
                </v-btn>
              </template>

              <v-list class="subtitle-2">
                <v-list-item>
                  <p>
                    1)&nbsp; Type in the name of the bike you are looking for in
                    the search field.<br />
                    The search result will be highlighted
                  </p>
                </v-list-item>

                <v-list-item>
                  <p>
                    2)&nbsp; To sort the table by make, hover over the label
                    "Make" and there will be an arrow that appears.<br />
                    Click it to sort the table
                  </p>
                </v-list-item>

                <v-list-item>
                  <p>
                    3)&nbsp; To view the rest of the information on the table,
                    on the footer of the table there will be an arrow<br />
                    that will be highlighted that indicates you can view the
                    next page of information.If you click the number "5",<br />
                    it will bring up the default options of how many rows of
                    information you would like to see.<br />
                    Click on it to change how much of information is being shown
                  </p>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-text-field
              v-model="searchBikes"
              solo-inverted
              prepend-inner-icon="mdi-magnify"
              label="Search for a Bike"
              class="mr-4 ml-4"
            />
          </span>
          <v-data-table
            :items-per-page="5"
            :search="searchBikes"
            :headers="bikeHeaders"
            :items="bikeList"
            dense
            class="ml-2 mr-2"
          >
            <!-- eslint-disable-next-line vue/valid-v-slot -->
            <template #item.Make="{ item }">
              <text-highlight :queries="searchBikes">
                {{ item.Make }}
              </text-highlight>
            </template>
            <template #no-results>
              <v-alert>
                <v-card-text class="error darken-1">
                  <v-icon>mdi-alert</v-icon>
                  &nbsp;Your search for "{{ searchBikes }}" yielded no results
                </v-card-text>
              </v-alert>
            </template>
          </v-data-table>
          <v-divider />
          <div align="center" class="mt-5 mb-5">
            <button class="pureCSSButton" @click="testButton">
              <div class="containingBackDrop">
                <label class="buttonText">CSS Styled Button</label>
              </div>
            </button>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./index.js" />
