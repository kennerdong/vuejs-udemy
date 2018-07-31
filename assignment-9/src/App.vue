<template>
    <div class="container">
        <form v-if="!isFormSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" class="form-control" v-model="userData.firstName">
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" class="form-control" v-model="userData.lastName">
                    </div> -->

                    <full-name v-model="userData.fullName"></full-name>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="form-control" v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="store-data">Store Data?</label>
                        <input type="radio" id="store-yes" value="Yes" v-model="userData.storeData"> Yes
                        <input type="radio" id="store-no" value="No" v-model="userData.storeData"> No
                    </div>
                    <div class="form-group">
                        <button @click.prevent="submitForm">Submit Form</button>
                    </div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isFormSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <!-- <p>Full Name: {{`${userData.firstName} ${userData.lastName}`}}</p> -->
                        <p>Full Name: {{userData.fullName}}</p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{userData.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './components/FullName.vue'
export default {
	data: () => {
		return {
			userData: {
                fullName: 'John Doe',
                firstName: '',
                lastName: '',
				email: '',
				password: '',
				storeData: 'Yes'
            },
            isFormSubmitted: false
		}
    },
    methods: {
        submitForm(){
            this.isFormSubmitted = true;
            // this.fullName = this.firstName + this.lastName;
        }
    },
    components: {
        fullName: FullName
    }
}
</script>

<style>
</style>
